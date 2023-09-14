import { ReactNode, createContext, useEffect, useReducer } from 'react'

import { Coffee } from '../@types/coffee'

import { cartReducer } from '../reducers/cart/reducer'

import {
  addToCart,
  removeFromCart,
  increase,
  decrease,
} from '../reducers/cart/actions'
import { CartItem } from '../@types/cart'

type CartContexType = {
  items: {
    coffee: Coffee
    quantity?: number
  }[]
  onAddToCart: (payload: Coffee) => void
  onRemoveFromCart: (payload: CartItem) => void
  onIncrease: (payload: CartItem) => void
  onDecrease: (payload: CartItem) => void
  itemCount: (coffeeId: number) => number
  total: () => number
}

export type CartType = CartItem[]

const initialState = {
  cart: [] as CartType,
}

export const CartContext = createContext({} as CartContexType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, dispatch] = useReducer(
    cartReducer,
    initialState,
    (initialState) => {
      const storage = localStorage.getItem('@coffee-delivery:cart-1.0.0')

      if (storage) {
        return JSON.parse(storage)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:cart-1.0.0', stateJSON)
  }, [cartItems])

  const onAddToCart = (payload: Coffee) => {
    const data = {
      id: payload.id,
      coffee: payload,
    }
    dispatch(addToCart(data))
  }

  const onRemoveFromCart = (payload: CartItem) => {
    dispatch(removeFromCart(payload))
  }

  const onIncrease = (payload: CartItem) => {
    dispatch(increase(payload))
  }

  const onDecrease = (payload: CartItem) => {
    dispatch(decrease(payload))
  }

  const itemCount = (coffeeId: number) => {
    return (
      cartItems.cart.find((coffee) => coffee.id === coffeeId)?.quantity || 0
    )
  }

  const total = () => {
    return cartItems.cart.reduce(
      (total, product) => total + product.coffee.price * product.quantity!,
      0,
    )
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems.cart,
        onAddToCart,
        onRemoveFromCart,
        onIncrease,
        onDecrease,
        itemCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
