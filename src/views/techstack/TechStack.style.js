import styled from "styled-components";

const MyTechStackSection = styled.section`
  display: grid;
  place-content: center;
  background-color: ${({ palette }) => palette.secondary};
  height: 50svh;

  > div {
    display: flex;

  }

  > svg {
    /* color: ${({ palette }) => palette.secondary}; */
  }
`;

export default MyTechStackSection;