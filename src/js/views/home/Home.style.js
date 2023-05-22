import styled from 'styled-components';

const HomeGrid = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 1rem 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  > div {
    background-color: #2A3E59;
    box-shadow: 12px 18px black;
    padding: 1rem;
    transition: 0.2s;

    :hover {
      transform: scale(1.01);
    }
  }

  img {
    width: 100%;

  }

  h1 {
    color: #D9665B;
    text-shadow: 3px 3px black;
    font-size: 4rem;
    text-align: left;

    @media (min-width: 600px) {
      font-size: 5rem;
    }

  }
`;

const LargeSection = styled.div`
  z-index: -1;
  position: relative;
  display: grid;
  place-content: center;

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

const PictureContainer = styled.div`

`;

const TitleContainer = styled.div`
  grid-column: span 3;
`;

export {
  HomeGrid,
  LargeSection,
  PictureContainer,
  TitleContainer
}