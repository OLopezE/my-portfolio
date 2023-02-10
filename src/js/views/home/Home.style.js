import styled from 'styled-components';

const HomeGrid = styled.div`
  display: grid;
  gap: 2px;
  min-height: 100vh;
  grid-template-columns: repeat(6, 1fr);
  background-color: black;


  > section {
    background-color: white;
  }
`;

const BigAssTitle = styled.h1`

`;

const ElegantSubtitle = styled.h3`

`;

const TitleSection = styled.section`
  grid-column: 1/7
`

export {
  HomeGrid,
  BigAssTitle,
  ElegantSubtitle,
  TitleSection
}