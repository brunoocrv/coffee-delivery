import { useState, useContext } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  TrashSimple,
} from 'phosphor-react'

import * as S from './styles'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<
    'creditCard' | 'debitCard' | 'money'
  >()

  const { items, onIncrease, onDecrease } = useContext(CartContext)

  console.log(items)

  return (
    <S.Wrapper>
      <S.InfosContainer>
        <S.Titles>Complete your order</S.Titles>
        <S.Container>
          <S.Infos>
            <MapPin size={22} />
            <div>
              <span>Delivery Address</span>
              <span>
                Enter the address where you would like to receive your order
              </span>
            </div>
          </S.Infos>
          <S.Address>
            <S.TextField placeholder="Postal Code" />
            <S.TextField placeholder="Street" $fullWidth />
            <S.TextField placeholder="Number" />
            <S.TextField placeholder="Complement" />
            <S.TextField placeholder="District" />
            <S.TextField placeholder="City" />
            <S.TextField placeholder="State" />
          </S.Address>
        </S.Container>
        <S.Container>
          <S.Infos>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <span>Payment</span>
              <span>
                Payment is made upon delivery. Choose the way you want to pay
              </span>
            </div>
          </S.Infos>
          <S.PaymentContainer>
            <S.Payment
              type="button"
              onClick={() => setPaymentMethod('creditCard')}
              $isSelected={paymentMethod === 'creditCard'}
            >
              <CreditCard size={16} />
              CREDIT CARD
            </S.Payment>
            <S.Payment
              type="button"
              onClick={() => setPaymentMethod('debitCard')}
              $isSelected={paymentMethod === 'debitCard'}
            >
              <Bank size={16} />
              DEBIT CARD
            </S.Payment>
            <S.Payment
              type="button"
              onClick={() => setPaymentMethod('money')}
              $isSelected={paymentMethod === 'money'}
            >
              <Money size={16} />
              MONEY
            </S.Payment>
          </S.PaymentContainer>
        </S.Container>
      </S.InfosContainer>
      <S.InfosContainer>
        <S.Titles>Selectioned Coffees</S.Titles>
        <S.Container>
          {items.map((item) => (
            <S.CoffeeDetails key={item.coffee.id}>
              <div>
                <img src={item.coffee.image} alt="" />
                <div className="actions">
                  <span>{item.coffee.name}</span>
                  <div className="handlerCoffee">
                    <div className="quantity">
                      <button
                        type="button"
                        onClick={() =>
                          onDecrease({
                            id: item.coffee.id,
                            coffee: item.coffee,
                          })
                        }
                      >
                        -
                      </button>
                      <span>1</span>
                      <button
                        type="button"
                        onClick={() =>
                          onIncrease({
                            id: item.coffee.id,
                            coffee: item.coffee,
                          })
                        }
                      >
                        +
                      </button>
                    </div>
                    <S.RemoveButton>
                      <TrashSimple size={16} />
                      REMOVE
                    </S.RemoveButton>
                  </div>
                </div>
              </div>
              <strong>
                R$
                {new Intl.NumberFormat('pt-BR', { currency: 'BRL' }).format(
                  item.coffee.price,
                )}
              </strong>
            </S.CoffeeDetails>
          ))}
          <S.Values>
            <span>Itens total</span>
            <span>R$ 30,50</span>
          </S.Values>
          <S.Values>
            <strong>Total</strong>
            <strong>R$ 30,50</strong>
          </S.Values>
          <S.CheckoutButton type="submit">Confirm Order</S.CheckoutButton>
        </S.Container>
      </S.InfosContainer>
    </S.Wrapper>
  )
}
