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
  position: relative;

  background: ${(props) => props.theme['yellow-light']};

  transition: background-color 0.3s;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  &:hover {
    opacity: 0.7;
  }

  span {
    display: flex;
    position: absolute;
    margin-top: calc(0px - 0.5rem);
    top: 0;
    right: 0;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;

    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0.5rem;
  gap: 0.5rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`
