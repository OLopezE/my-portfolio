import styled from "styled-components";

const AboutMeSection = styled.section`
  display: grid;
  padding: 6rem 3rem;
  gap: 2rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  > div {
    border: 2px solid black;
    box-shadow: 6px 6px black;
    padding: 1rem 3rem;
    grid-column: span 2;
  }

  h1 {
    text-shadow: 5px 8px #54728C;
    letter-spacing: 8px;

    @media (min-width: 600px) {
      font-size: 5rem;
      grid-column: span 3;
    }
  }

  img {
    height: 500px;
  }

  p {
    text-align: left;
    font-size: 2rem;
    color: #F2D98D;
    letter-spacing: 2px;
    text-shadow: 2px 2px #54728C;
  }
`;

export {
  AboutMeSection
}

