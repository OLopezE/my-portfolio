import styled from 'styled-components';

const HomeGrid = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(5, 1fr);
  background-color: black;

  > section {
    background-color: #FFF4EB;;
  }
`;

const LargeSection = styled.section`
  grid-row: span 2;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
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
  color: aliceblue;
  margin: 0;
  font-size: 7rem;
  text-align: left;
  padding: 1rem;
  text-shadow: 6px 6px #000;
`;

const TitleSection = styled.section`
  grid-column: span 5;
  display: flex;
  justify-content: center;
  flex-direction: column;

  > h1 {

  }
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
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  h1 {
    font-size: 5rem;
    text-align: left;
    margin: 0;
    color: antiquewhite;
    text-shadow: 6px 6px #000;
  }
`;

const AllRightsReservedSection = styled.section`
  grid-column: span 4;
  padding: 1rem;
  display: flex;
  justify-content: end;
  align-items: flex-end;

  h2 {
    margin: 0;
    text-align: right;
    font-weight: 600;
  }
`;

export {
  HomeGrid,
  BigAssTitle,
  MyPicture,
  MyPictureContainer,
  TitleSection,
  AllRightsReservedSection,
  LargeSection,
  HalfCircle,
  LongSection
}