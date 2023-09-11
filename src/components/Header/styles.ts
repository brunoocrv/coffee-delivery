import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background: transparent;

  > div {
    display: flex;
    gap: 0.75rem;

    align-items: center;
    justify-content: center;
  }
`

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  background: ${(props) => props.theme['yellow-light']};

  transition: background-color 0.3s;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  &:hover {
    opacity: 0.7;
  }
`
