
export   const maxQty = 5;

export const increaseQty = (
  currentQty: number,
  max?: number
): number => {
  if (typeof max === 'number' ) {
    return Math.min(currentQty + 1, max);
  }
  return currentQty + 1;
};

export const decreaseQty = (
  currentQty: number,
  min: number = 1
): number => {
  return Math.max(currentQty - 1, min);
};
