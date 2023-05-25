import styled from 'styled-components';

const HomeGrid = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 6rem 2rem 4rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  > div {
    padding: 3rem;
    transition: 0.4s;
    display: grid;
    place-content: center;

    :hover {
      transform: scale(1.01);
    }
  }

  > div:first-child {
    padding: 1rem;
  }

  img {
    width: 100%;
    box-shadow: 12px 18px black;
  }

  h1 {
    font-family: Chillax;
    color: #F2D98D;
    text-shadow: 3px 3px #54728C;
    font-size: 3.5rem;
    text-align: left;

    @media (min-width: 600px) {
      font-size: 5rem;
    }
  }
`;

const LargeSection = styled.div`
  background-color: transparent !important;
  box-shadow: 0 0 transparent !important;
  border: 0px !important;
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
  @media (min-width: 600px) {
    grid-column: span 3;
  }
`;

export {
  HomeGrid,
  LargeSection,
  PictureContainer,
  TitleContainer
}