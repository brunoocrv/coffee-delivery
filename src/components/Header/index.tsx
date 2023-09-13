import { MapPin, ShoppingCartSimple } from 'phosphor-react'
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
        <S.Location>
          <MapPin />
          <span>São Paulo, SP</span>
        </S.Location>
        <Link to="/checkout">
          <S.CartButton>
            <ShoppingCartSimple />
            <span>3</span>
          </S.CartButton>
        </Link>
      </div>
    </S.Wrapper>
  )
}
