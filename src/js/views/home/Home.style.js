import styled from 'styled-components';

const HomeGrid = styled.div`
  display: grid;
  gap: 2px;
  min-height: 100vh;
  grid-template-columns: repeat(5, 1fr);
  background-color: black;


  > section {
    background-color: white;
  }
`;

const BigAssTitle = styled.h1`
  margin: 0;
  font-size: 7rem;
  text-align: left;
  padding: 1rem;;
`;

const ElegantSubtitle = styled.h3`

`;

const TitleSection = styled.section`
  grid-column: span 4
`

export {
  HomeGrid,
  BigAssTitle,
  ElegantSubtitle,
  TitleSection
}