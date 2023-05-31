import styled from "styled-components";

const WorkExperienceGrid = styled.section`
  display: grid;
  gap: 1.5rem;
  padding: 1rem;

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
  background-color: #2A3E59;
  height: 240px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export { WorkExperienceGrid, TitleContainer, WorkContainer };