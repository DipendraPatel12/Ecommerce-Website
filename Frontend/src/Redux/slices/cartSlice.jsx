import { createSlice } from "@reduxjs/toolkit";

// ✅ Load Cart from LocalStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Error loading cart from storage:", error);
    return [];
  }
};

// ✅ Save Cart to LocalStorage
const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error saving cart to storage:", error);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: loadCartFromStorage(),
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, price, quantity = 1 } = action.payload;

      if (!price || isNaN(price)) {
        console.error("Invalid price in payload:", action.payload);
        return;
      }

      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity });
      }

      saveCartToStorage(state.cartItems); // ✅ Save after modification
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      saveCartToStorage(state.cartItems); // ✅ Save after modification
    },
    clearCart: (state) => {
      state.cartItems = [];
      saveCartToStorage(state.cartItems); // ✅ Save after modification
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);

      if (item) {
        item.quantity = Math.max(1, quantity);
      }

      saveCartToStorage(state.cartItems); // ✅ Save after modification
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
