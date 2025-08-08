import textSplitLine from './textSplitLine';

export const getTtsText = (text: string) => {
  return textSplitLine(text)
    .map((line) => {
      if (!contains(['.', '!', '?'], line.substring(line.length - 1))) {
        return `${line.trim()}.`;
      } else {
        return line.trim();
      }
    })
    .join(': ')
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
