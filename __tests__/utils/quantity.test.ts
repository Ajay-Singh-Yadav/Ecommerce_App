import { increaseQty, decreaseQty, maxQty } from '@utils/utilityFunctions';

describe('Quantity utility functions', () => {
  describe('increaseQty', () => {
    it('increases quantity by 1', () => {
      expect(increaseQty(1)).toBe(2);
    });

    it('does not exceed maxQty', () => {
      expect(increaseQty(maxQty, maxQty)).toBe(maxQty);
    });

    it('respects custom max value', () => {
      expect(increaseQty(4, 5)).toBe(5);
      expect(increaseQty(5, 5)).toBe(5);
    });
  });

  describe('decreaseQty', () => {
    it('decreases quantity by 1', () => {
      expect(decreaseQty(3)).toBe(2);
    });

    it('does not go below minimum (1)', () => {
      expect(decreaseQty(1)).toBe(1);
    });

    it('respects custom min value', () => {
      expect(decreaseQty(5, 3)).toBe(4);
      expect(decreaseQty(3, 3)).toBe(3);
    });
  });
});