import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export function recentBlock(file, version, language = 'zh-CN') {
  const data = JSON.parse(readFileSync(file, 'utf8'));
  if (data.reviewed_version !== version) throw Error(`请复核近期功能：${data.reviewed_version} != ${version}`);
  const items = data.languages?.[language] ?? data.items;
  if (!Array.isArray(items) || items.length !== 5 || new Set(items.map(x => x.text)).size !== 5) throw Error('近期功能必须为最近 5 个不重复的用户可见改进');
  for (const item of items) {
    if (!/^\d+\.\d+\.\d+$/.test(item.version) || !item.text?.trim() || /\n/.test(item.text)) throw Error('近期功能格式不正确');
    const cmp = item.version.split('.').map(Number), max = version.split('.').map(Number);
    if (cmp.some((v,i) => v !== max[i] && cmp.slice(0,i).every((n,j) => n === max[j]) && v > max[i])) throw Error('不能公开未发行的新功能');
  }
  const headings = {'zh-CN':'近期新增与改进（最近 5 项）','zh-TW':'近期新增與改進（最近 5 項）',en:'Recent features and improvements (5 items)',ja:'最近の機能追加と改善（5件）'};
  return `<!-- recent-features:start -->\n## ${headings[language]}\n\n${items.map(x => `- **${x.version}** · ${x.text}`).join('\n')}\n<!-- recent-features:end -->`;
}

export function validateReadme(text, manifest) {
  for (const [name, expected] of Object.entries(manifest.blocks)) {
    const marker = new RegExp(`<!-- evergreen:${name}:start -->([\\s\\S]*?)<!-- evergreen:${name}:end -->`, 'g');
    const matches = [...text.matchAll(marker)];
    if (matches.length !== 1 || createHash('sha256').update(matches[0][1]).digest('hex') !== expected) throw Error(`长期内容 ${name} 被删除或改写；请显式复核模板与保护清单`);
  }
  const matches = [...text.matchAll(/<!-- recent-features:start -->([\s\S]*?)<!-- recent-features:end -->/g)];
  if (matches.length !== 1 || (matches[0][1].match(/^- /gm) || []).length !== 5) throw Error('主页只保留 5 项近期功能');
  const introEnd = text.indexOf('<!-- evergreen:intro:end -->') + '<!-- evergreen:intro:end -->'.length;
  if (text.slice(introEnd, matches[0].index).trim()) throw Error('近期功能必须紧跟产品介绍');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = process.cwd();
  const manifest = JSON.parse(readFileSync(path.join(root, 'readme-protection.json')));
  for (const [file, rules] of Object.entries(manifest.files)) validateReadme(readFileSync(path.join(root, file),'utf8'), rules);
  console.log('长期介绍与传播内容完整，近期功能紧跟介绍且只有 5 项');
}
