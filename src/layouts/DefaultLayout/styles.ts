import { styled } from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 8rem;
  background: transparent;

  @media (max-width: 1280px) {
    padding: 1rem 2rem;
  }
`
