
export const getDotText = (text: string) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.slice(0, 2).join(' ') + (words.length > 2 ? '…' : '');
};
export const getDotTextTwo = (text: string) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.slice(0, 8).join(' ') + (words.length > 4 ? '…' : '');
};