export type CartItem = {
  id: number
  coffee: Coffee
  quantity?: number
}

export type CartType = CartItem[]
