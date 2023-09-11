import { ReactNode } from 'react'

import * as S from './styles'

type FeaturedItemsProps = {
  description: string
  icon: ReactNode
  background: string
}

export function FeaturedItems({
  description,
  icon,
  background,
}: FeaturedItemsProps) {
  return (
    <S.Wrapper>
      <S.IconContainer background={background}>{icon}</S.IconContainer>
      <span>{description}</span>
    </S.Wrapper>
  )
}
