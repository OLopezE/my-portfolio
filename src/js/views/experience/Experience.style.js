import styled from "styled-components";

const WorkExperienceGrid = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
  overflow: hidden;

  @media (min-width: 900px) {
    padding: 5rem 2rem 4rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;

  :hover {
    transform: scale(1.02);
  }

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
  display: grid;
  gap: 1rem;

  @media (min-width: 600px) {
    padding: 2rem 4rem;
  }

  > div {
    display: grid;
    gap: 1rem
  }

  ul {
    color: #F2D98D;
    padding: 0 2rem;
  }

  li {
    font-family: Chillax;
    text-align: left;
    font-size: 1.5rem;
  }
`;

const WorkButton = styled.button`
  all: unset;
  width: 100%;
  border-bottom: 4px solid #F2D98D;
  text-align: left;
  color: #F2D98D;
  font-family: Chillax;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.02);
    border-bottom: 4px solid #2A3E59;
    color: #2A3E59;
  }
`;

export {
  WorkExperienceGrid,
  TitleContainer,
  WorkContainer,
  WorkButton
};