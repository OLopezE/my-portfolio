import styled from "styled-components";

const AboutMeSection = styled.section`
  display: grid;
  padding: 1rem;
  gap: 1rem;

  @media (min-width: 800px) {
    padding: 6rem 3rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  > div {
    padding: 1rem;

    @media (min-width: 600px) {
      grid-column: span 2;
    }
  }

  h1 {
    font-size: 3rem;
    text-shadow: 5px 8px #54728C;
    letter-spacing: 8px;

    @media (min-width: 600px) {
      font-size: 5rem;
      grid-column: span 3;
    }
  }

  img {
    width: 100%;
    border: 1px solid #2A3E59;
    box-shadow: 5px 8px #2A3E59;

    @media (min-width: 600px) {
      width: 70%;
    }
  }

  p {
    text-align: left;
    font-family: Chillax;
    font-size: 1.5rem;
    color: #2A3E59;
    letter-spacing: 2px;
  }
`;

export {
  AboutMeSection
}
