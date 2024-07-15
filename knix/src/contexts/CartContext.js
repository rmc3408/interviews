import React, { createContext, useMemo, useState } from 'react';
import { removeQuantity, addQuantity } from '../helpers/contextFunctions';

export const CartContext = createContext();

/**
 * CART add/remove one item AND remove all items
 * Also, calculate total amount of items and total price of all items  
 */
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const totalItemsNumber = useMemo(() => cart.reduce((total, item) => total + item.amount, 0), [cart])
  const totalItemsPrice = useMemo(() => cart.reduce((total, item) => total + (item.amount * item.price), 0), [cart]) 

  const addToCart = (id, product) => {
    setCart(st => {
      const foundIdx = cart.findIndex(item => item.id === id)
      let newState;
      if (foundIdx > -1) {
        st.splice(foundIdx, 1, { ...st[foundIdx], amount: st[foundIdx].amount + 1 })
        newState = [...st]
      } else {
        newState = [...st, { ...product, amount: 1 }]
      }
      return newState
    })
  }

  const cleanCart = () => {
    setCart([])
  }

  const modifyQuantity = (id, operation) => {
    setCart(st => {
      let newState;
      const foundIdx = cart.findIndex(item => item.id === id)

      if (operation === 'remove') {
        newState = removeQuantity(st, foundIdx, id)
      }

      if (operation === 'add') {
        newState = addQuantity(st, foundIdx)
      }
      return [...newState]
    })
  }

  return <CartContext.Provider value={{ cart, totalItemsNumber, totalItemsPrice, modifyQuantity, addToCart, cleanCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
