import { produce } from 'immer'

import { ACTION_TYPES } from './actions'

import { CartItem } from '../../@types/cart'

export function cartReducer(
  state: { cart: CartItem[] },
  action: { type: keyof typeof ACTION_TYPES; payload: CartItem },
) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        return produce(state, (draft) => {
          draft.cart.push({ ...action.payload, quantity: 1 })
        })
      }

      return {
        cart: [...state.cart],
      }

    case ACTION_TYPES.REMOVE: {
      return {
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
      }
    }
    case ACTION_TYPES.INCREASE: {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (!(index < 0)) {
        return produce(state, (draft) => {
          draft.cart[index].quantity! += 1
        })
      }

      return {
        cart: [...state.cart],
      }
    }
    case ACTION_TYPES.DECREASE: {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (!(index < 0)) {
        return produce(state, (draft) => {
          if (draft.cart[index].quantity! > 1) {
            draft.cart[index].quantity! -= 1
          }
        })
      }

      return {
        cart: [...state.cart],
      }
    }
    default:
      return state
  }
}
