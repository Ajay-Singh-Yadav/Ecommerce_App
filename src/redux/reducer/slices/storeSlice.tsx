import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface StoreState {
  storeMode: Mode;
  products: Record<Mode, any[]>;
}


export type Mode = 'MEN' | 'WOMEN';

const initialState: StoreState = {
  storeMode: 'Men' as Mode,
  products: {
    MEN: [],
    WOMEN: [],
  },
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    toggleStore(state) {
      state.storeMode = state.storeMode === 'MEN' ? 'WOMEN' : 'MEN';
    },

    setProducts(state,  action: PayloadAction<{ mode: Mode; data: any[] }>) {
      const { mode, data }= action.payload;
      state.products[mode] = data;
    },
  },
});

export const { toggleStore, setProducts } = storeSlice.actions;
export default storeSlice.reducer;
