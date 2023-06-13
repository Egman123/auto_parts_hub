import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
  name: "cartFlag",
  initialState: {
    subtotal: 0,
    isCartOpen: false,
    toggle: true,
    cartNumber: 0,
    cartAccessories: [],
    cartAccessorCount: 0,
    accessories: [],
    accessor: {},
    languageData: [],
    toggleLang: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
      localStorage.setItem('cartState', state.isCartOpen ? 'closed' : 'open');
    },
    setStateTrue: (state) => {
      state.cartFlag = true;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    incCartNumber: (state) => {
      state.cartNumber = state.cartNumber + 1;
    },
    fillCartAccessories: (state, action) => {
      state.cartAccessories = [...state.cartAccessories, action.payload];
    },
    fillCartAccessoriesOnRefresh: (state, action) => {
      state.cartAccessories = action.payload;
    },
    incCartAccessorCount: (state, action) => {
       state.cartAccessories = state.cartAccessories.map(cartAccessor => {
        if(cartAccessor.id === action.payload) {
           cartAccessor.count = cartAccessor.count+1
        }
        return cartAccessor
       })
    },
    decCartAccessorCount: (state, action) => {
      state.cartAccessories = state.cartAccessories.map(cartAccessor => {
        if(cartAccessor.id === action.payload && cartAccessor.count > 1) {
           cartAccessor.count = cartAccessor.count-1
        }
        return cartAccessor
       })
    },
    setSubtotal: (state) => {
       state.subtotal += state.cartAccessories.map(cartAccessor => 
        cartAccessor.id * cartAccessor.price
       )
    },
    removeFromCart: (state, action) => {
      state.cartAccessories = state.cartAccessories.filter(
        (el) => el.id !== action.payload
      );
    },
    removeAllFromCart: (state, action) => {
      state.cartAccessories = [];
    },
    setAccessories: (state, action) => {
      state.accessories = action.payload;
    },
    setAccessor: (state, action) => {
      state.accessor = action.payload;
    },
    isToggleLang: (state) => {
      state.toggleLang = !state.toggleLang
    },
    setLanguage: (state, action) => {
      state.languageData = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setStateFalse,
  setStateTrue,
  setToggle,
  incCartNumber,
  fillCartAccessories,
  incCartAccessorCount,
  decCartAccessorCount,
  removeFromCart,
  removeAllFromCart,
  setAccessories,
  setAccessor,
  setSubtotal,
  toggleCart,
  fillCartAccessoriesOnRefresh,
  isToggleLang,
  setLanguage
} = counterSlice.actions;

export default counterSlice.reducer;
