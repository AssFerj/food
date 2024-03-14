import { Product } from '@/types/productType';
import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
