import styled from "styled-components";

const PortfolioGrid = styled.section`
  display: grid;
  gap: 2rem;
  padding: 1rem;
  justify-content: center;
  * {
    transition: 0.2s;

    :hover {
      transform: scale(1.02);
    }
  }

  @media (min-width: 600px) {
    padding: 5rem 1rem;
    grid-template-columns: repeat(3, 1fr);
  }

  h1 {
    font-size: 3rem;
    color: #F2D98D;
    margin: 0.5rem;
    letter-spacing: 8px;
    text-shadow: 5px 8px #54728C;

    @media (min-width: 600px) {
      font-size: 5rem;
      grid-column: span 3;
    }
  }

  > div {
    display: grid;
    padding: 2rem;
  }

  img {
    width: 100%;
    border: 1px solid #2A3E59;
    box-shadow: 5px 8px #2A3E59;
  }

  h3 {
    font-size: 2rem;
    letter-spacing: 4px;
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
