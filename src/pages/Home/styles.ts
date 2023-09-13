import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: flex-start;

  > span {
    font-family: 'Baloo 2';
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    margin-top: 5rem;
  }
`

export const FeaturedWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
  width: 100%;
  margin-top: 5rem;

  > img {
    max-width: 30rem;
    max-height: 22rem;
  }

  @media (max-width: 1000px) {
    > img {
      max-width: 10rem;
      max-height: 6rem;
      display: none;
    }
  }
`

export const InfosWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Items = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin-top: 5rem;
  gap: 2rem;
  align-items: flex-start;
`

export const CoffeesWrapper = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 5rem;
`
