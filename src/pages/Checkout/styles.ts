import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  width: 100%;
  margin-top: 3rem;
  gap: 2rem;
`

export const InfosContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: transparent;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.5rem;
  margin-top: 1rem;
  align-items: flex-start;

  background: ${(props) => props.theme['base-card']};
`

export const Titles = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  line-height: 1.3;
  font-weight: 700;
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  span:last-child {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const Address = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  margin-top: 2rem;
`

export const TextField = styled.input<{ $fullWidth?: boolean }>`
  outline: none;
  border-radius: 8px;
  padding: 0.75rem;

  ${({ $fullWidth = false }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
`

export const PaymentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;
  gap: 1rem;
`

export const Payment = styled.button<{ $isSelected: boolean }>`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  cursor: pointer;
  border-radius: 8px;
  border: none;
  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }

  ${(props) =>
    props.$isSelected &&
    css`
      border: 1px solid ${props.theme.purple};
      background: ${props.theme['purple-light']};
    `}
`

export const CoffeeDetails = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem 0;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    > img {
      width: 4rem;
      height: 4rem;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;

    color: ${(props) => props.theme['base-subtitle']};

    strong {
      color: ${(props) => props.theme['base-text']};
    }

    .handlerCoffee {
      display: flex;
      align-items: flex-start;

      gap: 1rem;

      .quantity {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4.5rem;
        height: 2rem;
        background: ${(props) => props.theme['base-button']};
        border-radius: 8px;

        button {
          width: 100%;
          border: none;
          background: transparent;
          cursor: pointer;
          color: ${(props) => props.theme.purple};

          transition: opacity 0.3s;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
`

export const RemoveButton = styled.button`
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 0.5rem;
  border-radius: 8px;
  cursor: pointer;

  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;
  line-height: 1.6;

  svg {
    color: ${(props) => props.theme.purple};
  }

  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  transition: opacity 0.3s;
  &:hover {
    opacity: 0.7;
  }
`

export const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  margin: 1rem 0;
`
