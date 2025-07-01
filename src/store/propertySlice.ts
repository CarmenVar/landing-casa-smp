import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PropertyState {
  price: number;
  isContactFormOpen: boolean;
  selectedLanguage: 'es' | 'en';
  isLoading: boolean;
}

const initialState: PropertyState = {
  price: 450000,
  isContactFormOpen: false,
  selectedLanguage: 'es',
  isLoading: false,
};

const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    toggleContactForm: (state) => {
      state.isContactFormOpen = !state.isContactFormOpen;
    },
    setLanguage: (state, action: PayloadAction<'es' | 'en'>) => {
      state.selectedLanguage = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setPrice, toggleContactForm, setLanguage, setLoading } = propertySlice.actions;
export default propertySlice.reducer; 