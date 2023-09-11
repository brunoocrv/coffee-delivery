import styled from 'styled-components'

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.25rem;
  margin-top: 1rem;
  width: 19rem;
  height: 18rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 2px 10px 2px 10px;

  @media (max-width: 1040px) {
    width: 100%;
  }

  img {
    margin-top: calc(0px - 20px);
  }

  .name {
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }

  .description {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    overflow-wrap: break-word;
    margin-bottom: 2rem;
  }

  .tagContainer {
    display: flex;
    flex-wrap: 'wrap';
    gap: 0.2rem;
    margin-top: 1rem;

    .tag {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 100px;
      padding: 0.2rem 0.5rem;
      font-size: 0.625rem;
    }
  }

  @media (max-width: 835px) {
    width: 100%;
  }
`

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: 0.5rem;

  .price {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;

    strong {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
    }
  }

  .cart {
    max-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 8px;
    background: ${(props) => props.theme['purple-dark']};
    cursor: pointer;

    transition: background-color 0.3s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    max-height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.25rem;
    border-radius: 8px;
    background: ${(props) => props.theme['base-button']};

    button {
      border: none;
      background: transparent;
      cursor: pointer;
      width: 2rem;
      height: 2rem;

      color: ${(props) => props.theme['purple-dark']};
      transition: color 0.3s;

      &:hover {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`
