import * as S from './styles'

import deliveryIMG from '../../assets/delivery.svg'

export function Success() {
  return (
    <S.Wrapper>
      <h5>Yeah! Order confirmed</h5>
      <span>Now just wait and the coffee will soon reach you</span>

      <S.Order>
        <S.OrderDetails>order infos</S.OrderDetails>

        <img
          src={deliveryIMG}
          alt="A man riding a motorcycle to deliver coffee orders"
        />
      </S.Order>
    </S.Wrapper>
  )
}
