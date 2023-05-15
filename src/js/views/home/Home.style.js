import styled from 'styled-components';

const HomeGrid = styled.div`
  display: grid;
  gap: 2px;
`;

const LargeSection = styled.section`
  z-index: -1;
  position: relative;
  display: grid;
  place-content: center;

  > iframe {
    width: 100%;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const TitleSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > h1 {
    color: aliceblue;
    margin: 0;
    font-size: 5rem;
    text-align: left;
    padding: 1rem;
    text-shadow: 6px 6px #000;
  }
`;

const MyPicture = styled.img`
  height: 70%;
  border: 2px solid black;
`;

const MyPictureContainer = styled.div`
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

export {
  HomeGrid,
  MyPicture,
  MyPictureContainer,
  TitleSection,
  LargeSection,
  LongSection
}