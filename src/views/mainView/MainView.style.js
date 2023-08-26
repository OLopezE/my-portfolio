import styled from 'styled-components'

const MainViewSection = styled.section`
  position: relative;
  min-height: 100svh;
  padding: 3rem;

  @media (min-width: 800px) {
    > div {
    position: absolute;
    width: 300px;
    right: 0;
    top: 10rem;
  }

  > h1 {
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 5rem;
  }
  }

  img {
    background-color: pink;
    width: 250px;
    aspect-ratio: 4/5;
  }
`;

export {
  MainViewSection
}