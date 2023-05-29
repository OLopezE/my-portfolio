import styled from "styled-components";

const PortfolioGrid = styled.section`
  display: grid;
  gap: 2rem;
  padding: 6rem 1rem;
  justify-content: center;

  h1 {
    font-size: 3rem;
    color: #F2D98D;
    margin: 0.5rem;
    letter-spacing: 8px;
    text-shadow: 5px 8px #54728C;

    @media (min-width: 600px) {
      font-size: 5rem;
    }
  }

  img {
    width: 500px;
  }

  h3 {
    font-size: 2rem;
    color: #F2D98D;
    margin: 0.5rem;
    letter-spacing: 4px;
    text-shadow: 4px 4px #54728C;
  }

  a {
    all: unset;
    width: fit-content;
    transition: 0.3s;

    :hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  }
`;

export {
  PortfolioGrid
};
