import styled from 'styled-components'

const MeetMeSection = styled.section`
  padding: 0rem 3rem;
  text-align: justify;

  @media (min-width: 800px) {
    padding-top: 10rem;
    display: flex;
    justify-content: space-around;

    > div {
      width: 300px;
    }

    > h2 {
      margin: 0;
      font-size: 5rem;
    }
  }

  img {
    max-width: 400px;
    width: 100%;
    aspect-ratio: 4/5;
  }
`;

export {
  MeetMeSection
}