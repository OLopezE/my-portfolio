import styled from 'styled-components';

const HomeGrid = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 1rem 1rem 2rem;

  * {
    transition: 0.2s;

    :hover {
      transform: scale(1.02);
    }
  }

  @media (min-width: 900px) {
    padding: 5rem 2rem 4rem;
    grid-template-columns: repeat(3, 1fr);
  }

  > div:first-child {
    padding: 1rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    border: 2px solid #2A3E59;
    box-shadow: 12px 18px #2A3E59;
    width: 100%;

    @media (min-width: 900px) {
      width: 75%;
    }
  }
`;

const TitleContainer = styled.div`
  h1 {
    color: #F2D98D;
    text-shadow: 5px 8px #54728C;
    font-size: 3rem;
    text-align: left;

    @media (min-width: 600px) {
      font-size: 5rem;
    }
  }

  @media (min-width: 900px) {
    grid-column: span 3;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  padding: 1rem;

  @media (min-width: 600px) {
    grid-column: span 2;
    padding: 2rem 4rem;
    text-align: center;
  }

  p {
    font-family: Chillax;
    font-size: 2.5rem;
    color: #2A3E59;
  }
`;

export {
  HomeGrid,
  TitleContainer,
  TextContainer
}