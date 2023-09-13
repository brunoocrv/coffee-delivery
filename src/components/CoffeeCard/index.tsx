import { ShoppingCartSimple } from 'phosphor-react'
import { useContext } from 'react'

import * as S from './styles'

import { Coffee } from '../../@types/coffee'
import { CartContext } from '../../contexts/CartContext'

export function CoffeeCard(coffee: Coffee) {
  const { onAddToCart } = useContext(CartContext)

  const addToCart = () => {
    onAddToCart(coffee)
  }

  return (
    <S.CardWrapper>
      <img src={coffee.image} alt="" />
      <div className="tagContainer">
        {coffee.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
      <span className="name">{coffee.name}</span>
      <span className="description">{coffee.description}</span>
      <S.Footer>
        <span className="price">
          R$
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
            }).format(coffee.price)}
          </strong>
        </span>
        <S.Buy className="cart" onClick={addToCart}>
          <ShoppingCartSimple />
        </S.Buy>
      </S.Footer>
    </S.CardWrapper>
  )
}
