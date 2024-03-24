import { toast } from "sonner"
import { Product } from '@/types/productType';
import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  cartItens: Product[];
  addToCart: (product: Product) => void;
  removeItemFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType>({
  cartItens: [],
  addToCart: () => {},
  removeItemFromCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const [cartItens, setCartItens] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const existProduct = cartItens.find((item) => item.id === product.id);
    
    if (existProduct) {
      toast.warning(`${product.nome} já está na sacola.`)
      return
    }
    setCartItens([...cartItens, product]);
    toast.success(`${product.nome} adicionado a sacola.`)
  };

  const removeItemFromCart = (productId: number) => {
    setCartItens(cartItens.filter(item => item.id !== productId));
    toast.error(`Item removido da sacola.`)
  };

  return (
    <CartContext.Provider value={{ cartItens, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
