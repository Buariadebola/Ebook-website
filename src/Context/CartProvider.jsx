import React, { createContext, useState, useEffect } from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {

      const [cartBooks, setCartBooks] = useState(() => {
          const storedFavorites = localStorage.getItem('cart');
          return storedFavorites ? JSON.parse(storedFavorites) : [];
      });
  
      useEffect(() => {
          localStorage.setItem('favorites', JSON.stringify(cartBooks));
      }, [cartBooks]);
  
  const addToCart = (book) => {
    if (!cartBooks.find(cart => cart.bookId === book.bookId)) {
      setCartBooks([...cartBooks, book]);
    }
  };
  
      const removeFromCart = (bookId) => {
        setCartBooks(cartBooks.filter((cart) => cart.bookId !== bookId));
    };


  return (
    <CartContext.Provider value={{cartBooks, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}

export {CartProvider, CartContext}

