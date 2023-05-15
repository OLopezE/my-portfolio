import React from 'react'

import {
  HomeGrid,
  LargeSection
} from './Home.style';

import oscarPicture from '../../../assets/media/pictures/my-picture.png'

const Home = () => {
  return (
    <HomeGrid>
      <h1>Oscar Lopez Escobar</h1>
      <LargeSection>
        <iframe src="https://giphy.com/embed/VDf9UxxaxKPm9OWHT9" width="360" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </LargeSection>
    </HomeGrid>
  );
};

export default Home;
