import { create } from 'zustand';

const store = create((set) => ({
  currency: 'usd',
  setCurrency: (newCurrency) =>
    set((state) => ({
      ...state,
      currency: newCurrency,
    })),
}));

export default store;
