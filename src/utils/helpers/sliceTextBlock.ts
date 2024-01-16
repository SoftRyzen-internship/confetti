export const sliceTextBlock = (
  text: string,
  firstWordIndex: number,
  lastWordIndex?: number,
) => {
  if (!lastWordIndex) return text?.split(' ').slice(firstWordIndex).join(' ');

  return text?.split(' ').slice(firstWordIndex, lastWordIndex).join(' ');
};
