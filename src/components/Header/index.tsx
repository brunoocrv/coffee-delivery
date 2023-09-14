import { useContext } from 'react'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import { Link } from 'react-router-dom'

import * as S from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-logo.svg'

import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { items } = useContext(CartContext)

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
            <span>{items.length > 0 ? items.length : 0}</span>
          </S.CartButton>
        </Link>
      </div>
    </S.Wrapper>
  )
}
