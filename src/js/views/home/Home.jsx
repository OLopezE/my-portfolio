import React from 'react'

import {
  HomeGrid,
  MyPicture,
  MyPictureContainer,
  TitleSection,
  LargeSection,
  LongSection
} from './Home.style';

import oscarPicture from '../../../assets/media/pictures/my-picture.png'

const Home = () => {
  return (
    <HomeGrid>
      <TitleSection>
        <h1>Oscar Lopez Escobar</h1>
      </TitleSection>
      <TitleSection>
        <h1>Portfolio / 2023</h1>
      </TitleSection>
      <LargeSection>
        <iframe src="https://giphy.com/embed/VDf9UxxaxKPm9OWHT9" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </LargeSection>
      <LongSection>
        <h1>Frontend Software Engineer</h1>
      </LongSection>
      <MyPictureContainer>
        <MyPicture src={oscarPicture}/>
      </MyPictureContainer>
    </HomeGrid>
  );
};

export default Home;
