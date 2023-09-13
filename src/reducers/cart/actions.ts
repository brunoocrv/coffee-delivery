import { CartItem } from '../../@types/cart'

/* eslint-disable @typescript-eslint/no-explicit-any */
export enum ACTION_TYPES {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE = 'REMOVE',
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  CHECKOUT = 'CHECKOUT',
}

export const addToCart = (payload: CartItem) => {
  return { type: ACTION_TYPES.ADD_TO_CART, payload }
}

export const increase = (payload: CartItem) => {
  return { type: ACTION_TYPES.INCREASE, payload }
}

export const decrease = (payload: CartItem) => {
  return { type: ACTION_TYPES.DECREASE, payload }
}

export const removeFromCart = (payload: CartItem) => {
  return { type: ACTION_TYPES.REMOVE, payload }
}
