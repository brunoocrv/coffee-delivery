import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import * as S from './styles'
import coffee from '../../assets/main-image.svg'

import { FeaturedItems } from '../../components/FeaturedItems'

import { coffees } from './coffees'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <S.Wrapper>
      <S.FeaturedWrapper>
        <S.InfosWrapper>
          <h1>Find a perfect coffee anytime of day!</h1>
          <span>
            With Coffee Delivery you receive your coffee anywhere, anytime.
          </span>

          <S.Items>
            <FeaturedItems
              title="Simple and safety buy"
              icon={<ShoppingCart />}
              background="yellow-dark"
            />
            <FeaturedItems
              title="The package keeps coffee intact"
              icon={<Package />}
              background="base-text"
            />
            <FeaturedItems
              title="Fast and trackable delivery"
              icon={<Timer />}
              background="yellow"
            />
            <FeaturedItems
              title="Coffee arrives fresh to you"
              icon={<Coffee />}
              background="purple"
            />
          </S.Items>
        </S.InfosWrapper>
        <img src={coffee} alt="bottle of coffee" />
      </S.FeaturedWrapper>

      <span>Our coffees</span>
      <S.CoffeesWrapper>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </S.CoffeesWrapper>
    </S.Wrapper>
  )
}
