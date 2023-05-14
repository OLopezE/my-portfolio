import styled from "styled-components";

const PortfolioGrid = styled.section`
  display: grid;
  gap: 1rem;

  h1 {
    font-size: 5rem;
    color: #F2D98D;
    margin: 2rem 0.5rem;
    letter-spacing: 8px;
    text-shadow: 6px 6px #54728C;
  }

  div {
    width: 100%;

    > img {
      width: 300px;
    }
  }

  h3 {
    font-size: 3rem;
    color: #F2D98D;
    margin: 2rem 0.5rem;
    letter-spacing: 4px;
    text-shadow: 4px 4px #54728C;
  }

  a{
    all: unset;
  }
`;

export {
  PortfolioGrid
};
