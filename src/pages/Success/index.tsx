import { useEffect, useState } from 'react'

import * as S from './styles'

import deliveryIMG from '../../assets/delivery.svg'
import { FeaturedItems } from '../../components/FeaturedItems'
import { MapPin, Timer } from 'phosphor-react'

import { OrderStorageType } from '../Checkout'

export function Success() {
  const [order, setOrder] = useState<OrderStorageType>()

  useEffect(() => {
    const storage = localStorage.getItem('@coffee-delivery:order-1.0.0')

    console.log(JSON.parse(storage!))

    if (storage) {
      setOrder(JSON.parse(storage))
    }
  }, [])

  return (
    <S.Wrapper>
      <h5>Yeah! Order confirmed</h5>
      <span>Now just wait and the coffee will soon reach you</span>

      <S.Order>
        <S.OrderDetails>
          <FeaturedItems
            icon={<MapPin />}
            title={
              order?.address.street && (
                <span>
                  Deliver in{' '}
                  <strong>
                    {order.address.street}, {order.address.number}
                  </strong>
                </span>
              )
            }
            description={
              order?.address.district &&
              order.address.city &&
              order.address.state && (
                <span>
                  {order?.address.district} - {order.address.city},{' '}
                  {order?.address.state}
                </span>
              )
            }
            background="purple-dark"
          />
          <FeaturedItems
            title="Delivery forecast"
            icon={<Timer />}
            description={<strong>20min - 30min</strong>}
            background="yellow"
          />
          <FeaturedItems
            title="Delivery forecast"
            icon={<Timer />}
            description={
              <strong>
                {order?.paymentMethod
                  .split(/(?=[A-Z])/)
                  .join(' ')
                  .toUpperCase()}
              </strong>
            }
            background="yellow-dark"
          />
        </S.OrderDetails>

        <img
          src={deliveryIMG}
          alt="A man riding a motorcycle to deliver coffee orders"
        />
      </S.Order>
    </S.Wrapper>
  )
}
