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
        <h1>Oscar López Escobar / PORTFOLIO 2023</h1>
      </TitleContainer>
      <PictureContainer>
        <img src={oscarPicture} alt="yo mero con mi amigo martin" />
      </PictureContainer>
      <LargeSection>
        <iframe src="https://giphy.com/embed/VDf9UxxaxKPm9OWHT9" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </LargeSection>
    </HomeGrid>
  );
};

export default Home;
