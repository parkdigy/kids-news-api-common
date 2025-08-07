import textSplitLine from './textSplitLine';

export const getTtsText = (text: string) => {
  return textSplitLine(text)
    .join('\n')
    .replaceAll('\n\n', '\n')
    .replaceAll('\n\n', '\n')
    .replace(/\(.*?\)/g, '')
    .replace(/([『』「」])/gi, '')
    .replaceAll(',', ':')
    .replaceAll(` '`, `: '`)
    .replaceAll(' ‘', ': ‘')
    .replaceAll(' "', ': "')
    .replaceAll(' “', ': “')
    .replaceAll('그런데 어느 날', '그런데어느날')
    .trim();
};

export default getTtsText;
