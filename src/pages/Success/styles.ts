import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  align-items: start;

  h5 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Order = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`

export const OrderDetails = styled.div`
  ${(props) => css`
    padding: 2.5rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    border: double 1px transparent;
    background-image: linear-gradient(
        ${props.theme['base-background']},
        ${props.theme['base-background']}
      ),
      radial-gradient(
        circle at top left,
        ${props.theme.yellow},
        ${props.theme.purple}
      );
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
  `}
`
