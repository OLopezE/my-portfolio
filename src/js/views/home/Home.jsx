import React from 'react'

import {
  HomeGrid,
  BigAssTitle,
  MyPicture,
  MyPictureContainer,
  TitleSection,
  AllRightsReservedSection,
  LargeSection,
  LongSection
} from './Home.style';

import oscarPicture from '../../../assets/media/pictures/my-picture.png'

const Home = () => {
  return (
    <HomeGrid>
      <TitleSection>
        <BigAssTitle>Oscar Lopez Escobar</BigAssTitle>
        <BigAssTitle>Portfolio / 2023</BigAssTitle>
      </TitleSection>
      <MyPictureContainer>
        <MyPicture src={oscarPicture}/>
      </MyPictureContainer>
      <LargeSection>
        <iframe src="https://giphy.com/embed/VDf9UxxaxKPm9OWHT9" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </LargeSection>
      <LongSection>
        <h1>Frontend Software Engineer</h1>
      </LongSection>
      <AllRightsReservedSection>
        <h2>All rights reserved</h2>
      </AllRightsReservedSection>
    </HomeGrid>
  );
};

export default Home;
