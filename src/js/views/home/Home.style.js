import styled from 'styled-components';

const HomeGrid = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 1rem;

  @media (min-width: 600px) {
    padding: 6rem 2rem 4rem;
    grid-template-columns: repeat(3, 1fr);
  }

  > div:first-child {
    padding: 1rem;
  }

  > img {
    border: 2px solid #54728C;
    width: 100%;
    box-shadow: 12px 18px #54728C;
  }

  h1 {
    color: #F2D98D;
    text-shadow: 5px 8px #54728C;
    font-size: 3.5rem;
    text-align: left;

    @media (min-width: 600px) {
      font-size: 5rem;
    }
  }
`;

const LargeSection = styled.div`
  position: relative;
  display: grid;
  place-content: center;
  z-index: -1;


  > iframe {
    width: 100%;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const TitleContainer = styled.div`
  @media (min-width: 600px) {
    grid-column: span 3;
  }
`;

export {
  HomeGrid,
  LargeSection,
  TitleContainer
}