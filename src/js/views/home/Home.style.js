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
  text-align: left;
  margin: 0;
  padding: 0 2rem;;
`;

const TitleSection = styled.section`
  grid-column: span 3;
`

const MyPicture = styled.img`

`;

const MyPictureContainer = styled.div`
  grid-column: span 2;
  grid-row: span 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(63,94,251);
  background: radial-gradient(circle, #3f5efb 0%, #fc5546 36%, #3f5efb 76%, #fc5546 99%); 
  background-size: 400%;
  animation: mymove 16s ease infinite alternate;
  
  @keyframes mymove {
    0% {
      background-position: left;
    }
    50% {
      background-position: right;
    }
    100% {
      background-position: left;
    }
  }

`;

export {
  HomeGrid,
  BigAssTitle,
  ElegantSubtitle,
  MyPicture,
  MyPictureContainer,
  TitleSection
}