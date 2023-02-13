import styled from 'styled-components';

const HomeGrid = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(5, 1fr);
  background-color: black;
  min-height: 100vh;

  > section {
    background-color: #FFF4EB;;
  }
`;

const LargeSection = styled.section`
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  padding: 2rem;
`;

const HalfCircle = styled.div`
 ::before, ::after {
   content: '';
   width: 100%;
   aspect-ratio: 1/1;
   background-color: aqua;
   border-radius: 50%;
   position: absolute;
   background: rgb(131,58,180);
   background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
 }

 ::before {
   left: -50%;
 }

 ::after {
   left: 50%;
 }
`;

const BigAssTitle = styled.h1`
  margin: 0;
  font-size: 7rem;
  text-align: left;
  padding: 1rem;;
`;

const NameSection = styled.section`
  grid-column: span 3;
`;

const MyPicture = styled.img`
  height: 70%;
  border: 2px solid black;
`;

const MyPictureContainer = styled.div`
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

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

const LongSection = styled.section`
  grid-column: span 2;
`;

const JobTitleSection = styled.section`
  grid-column: span 4;
`;

export {
  HomeGrid,
  BigAssTitle,
  MyPicture,
  MyPictureContainer,
  NameSection,
  JobTitleSection,
  LargeSection,
  HalfCircle,
  LongSection
}