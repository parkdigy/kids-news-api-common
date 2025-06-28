export const getTtsText = (text: string) => {
  return text
    .split('\n')
    .map((line) => {
      return empty(line.trim()) || contains(['!', '?', '.'], line.substring(line.length - 1)) ? line : `${line}!`;
    })
    .join('\n')
    .replace(/\(.*?\)/g, '')
    .replace(/(['"`])/gi, '')
    .trim();
};

export default getTtsText;
