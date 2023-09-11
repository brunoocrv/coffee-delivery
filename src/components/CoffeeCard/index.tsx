import { ShoppingCartSimple } from 'phosphor-react'

import * as S from './styles'

import { Coffee } from '../../@types/coffee'

export function CoffeeCard(coffee: Coffee) {
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

        <S.CartWrapper>
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="cart">
            <ShoppingCartSimple />
          </button>
        </S.CartWrapper>
      </S.Footer>
    </S.CardWrapper>
  )
}
