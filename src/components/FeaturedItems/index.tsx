import { ReactNode } from 'react'

import * as S from './styles'

type FeaturedItemsProps = {
  title: ReactNode
  description?: ReactNode
  icon: ReactNode
  background: string
}

export function FeaturedItems({
  title,
  description = '',
  icon,
  background,
}: FeaturedItemsProps) {
  return (
    <S.Wrapper>
      <S.IconContainer background={background}>{icon}</S.IconContainer>
      <div className="texts">
        {title}
        {description}
      </div>
    </S.Wrapper>
  )
}
