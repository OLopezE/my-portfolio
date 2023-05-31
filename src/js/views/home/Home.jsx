import React from 'react'

import {
  TitleContainer,
  HomeGrid,
  TextContainer
} from './Home.style';

import oscarPicture from '../../../assets/media/pictures/my-picture.png'

const Home = () => {
  return (
    <HomeGrid>
      <TitleContainer>
        <h1>OSCAR LOPEZ ESCOBAR - PORTFOLIO 2023</h1>
      </TitleContainer>
      <TextContainer>
        <p>
          Hey there! <br />
          My name is Oscar, I am a 24 year old software engineer from Chihuahua, México.
        </p>
      </TextContainer>
      <diV>
        <img src={oscarPicture} alt="yo mero con mi amigo martin" />
      </diV>
    </HomeGrid>
  );
};

export default Home;
