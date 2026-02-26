
export const getDotText = (text: string) => {
  if (!text) return '';
  const words = text.split(' ');
  return words.slice(0, 2).join(' ') + (words.length > 2 ? '…' : '');
};