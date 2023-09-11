import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 1rem;

  span {
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

export const IconContainer = styled.div<{ background: string }>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;

  background: ${({ background, ...props }) => props.theme[background]};

  svg {
    color: ${(props) => props.theme.white};
  }
`
