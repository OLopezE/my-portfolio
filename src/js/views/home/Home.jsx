import React from 'react'

import {
  HomeGrid,
  BigAssTitle,
  MyPicture,
  MyPictureContainer,
  NameSection,
  JobTitleSection,
  LargeSection,
  HalfCircle,
  LongSection
} from './Home.style';

import oscarPicture from '../../../assets/media/pictures/my-picture.png'

const Home = () => {
  return (
    <HomeGrid>
      <NameSection>
        <BigAssTitle>Oscar Lopez Escobar</BigAssTitle>
      </NameSection>
      <MyPictureContainer>
        <MyPicture src={oscarPicture}/>
      </MyPictureContainer>
      <LargeSection>
        <HalfCircle />
      </LargeSection>
      <LongSection>
        <h4>
          Embrace yourself and embrace others.
        </h4>
        <h4>
          Explore nature.
        </h4>
        <h4>
          
        </h4>
      </LongSection>
      <JobTitleSection>
        <BigAssTitle>Frontend Software Engineer</BigAssTitle>
      </JobTitleSection>
    </HomeGrid>
  );
};

export default Home;
