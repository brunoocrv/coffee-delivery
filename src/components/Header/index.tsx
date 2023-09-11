import * as S from './styles'

import coffeeDeliveryLogo from '../../assets/coffee-logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <S.Wrapper>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </Link>

      <div>
        Maringá
        <S.CartButton>
          <ShoppingCart />
        </S.CartButton>
      </div>
    </S.Wrapper>
  )
}
