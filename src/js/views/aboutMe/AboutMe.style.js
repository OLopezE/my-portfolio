import styled from "styled-components";

const AboutMeSection = styled.section`
  display: grid;
  justify-content: left;
  padding: 1rem 3rem;
  text-align: left;


  > div {
    border: 2px solid black;
    box-shadow: 6px 6px black;
    padding: 1rem 3rem;
  }

  h1 {
    font-size: 5rem;
    color: #F2D98D;
    margin: 2rem 0.5rem;
    letter-spacing: 8px;
    text-shadow: 6px 6px #54728C;
    margin: 0;
  }

  p {
    font-size: 1.3rem;
    color: #F2D98D;
    letter-spacing: 2px;
    text-shadow: 2px 2px #54728C;
  }
`;

export {
  AboutMeSection
}

