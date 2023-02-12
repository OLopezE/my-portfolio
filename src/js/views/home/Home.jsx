import React from 'react'

import {
  HomeGrid,
  BigAssTitle,
  ElegantSubtitle,
  MyPicture,
  MyPictureContainer,
  TitleSection
} from './Home.style';

import oscarPicture from '../../../assets/media/pictures/my-picture.png'

const Home = () => {
  return (
    <HomeGrid>
      <TitleSection>
        <BigAssTitle>Oscar Lopez Escobar</BigAssTitle>
        <ElegantSubtitle>Frontend Software Engineer</ElegantSubtitle>
      </TitleSection>
      <MyPictureContainer>
        <MyPicture src={oscarPicture}/>
      </MyPictureContainer>
      <section>Hola</section>
      <section>Hola</section>
    </HomeGrid>
  );
};

export default Home;
