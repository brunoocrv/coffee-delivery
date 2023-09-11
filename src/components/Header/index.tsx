import { ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'

import * as S from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-logo.svg'

export function Header() {
  return (
    <S.Wrapper>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </Link>

      <div>
        Maringá
        <S.CartButton>
          <ShoppingCartSimple />
        </S.CartButton>
      </div>
    </S.Wrapper>
  )
}
