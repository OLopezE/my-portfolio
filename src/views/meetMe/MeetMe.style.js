import styled from 'styled-components'

const MeetMeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0rem 3rem;
  text-align: justify;

  > h2 {
    padding: 4rem 0 1rem;
    margin: 0;
    font-size: 3rem;
    text-align: center;
  }

  @media (min-width: 800px) {
    justify-content: space-around;
    flex-direction: row;

    > div {
      padding-top: 10rem;
      width: 300px;
    }

    > h2 {
      padding-top: 10rem;
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