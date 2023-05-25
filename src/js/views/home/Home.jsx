import React from 'react'

import {
  TitleContainer,
  HomeGrid,
  LargeSection,
  PictureContainer
} from './Home.style';

import oscarPicture from '../../../assets/media/pictures/my-picture.png'

const Home = () => {
  return (
    <HomeGrid>
      <TitleContainer>
        <h1>OSCAR LOPEZ ESCOBAR - PORTFOLIO 2023</h1>
      </TitleContainer>

      <LargeSection>
        <iframe src="https://giphy.com/embed/IP6Lh6vrvkCvS" width="480" height="359" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </LargeSection>

      <img src={oscarPicture} alt="yo mero con mi amigo martin" />

      <LargeSection>
        <iframe src="https://giphy.com/embed/VDf9UxxaxKPm9OWHT9" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </LargeSection>
    </HomeGrid>
  );
};

export default Home;
