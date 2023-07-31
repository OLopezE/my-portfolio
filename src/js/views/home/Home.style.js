import styled from 'styled-components';

const HomeGrid = styled.section`
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
  }
`;

const TitleContainer = styled.div`
  h1 {
    font-size: 3rem;
    text-align: left;

    @media (min-width: 600px) {
      font-size: 5rem;
    }
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
    font-size: 2.5rem;
  }
`;

export {
  HomeGrid,
  TitleContainer,
  TextContainer
}