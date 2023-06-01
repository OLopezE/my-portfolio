import styled from "styled-components";

const WorkExperienceGrid = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
  overflow: hidden;

  * {
    transition: 0.2s;

    :hover {
      transform: scale(1.02);
    }
  }

  @media (min-width: 900px) {
    padding: 5rem 2rem 4rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #F2D98D;
    text-shadow: 5px 8px #54728C;
    font-size: 3.5rem;
    text-align: left;
    letter-spacing: 8px;

    @media (min-width: 600px) {
      font-size: 5rem;
    }
  }
`;

const WorkContainer = styled.div`
  min-height: 240px;
  display: grid;
  gap: 1rem;

  > div {
    border: 2px solid black;
    background: rgb(84,114,140);
    background: radial-gradient(circle, rgba(84,114,140,1) 60%, rgba(217,102,91,1) 100%);
    box-shadow: 6px 6px black;
  }
`;

const WorkButton = styled.button`
  all: unset;
  color: #F2D98D;
  font-family: Chillax;
  font-size: 2rem;
  cursor: pointer;

  :hover {
    color: #D9665B;
  }
`;

export {
  WorkExperienceGrid,
  TitleContainer,
  WorkContainer,
  WorkButton
};