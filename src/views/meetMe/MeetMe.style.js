import styled from 'styled-components'

const MeetMeSection = styled.section`
  margin: 0 auto;

  h2, p {
    text-align: left;
  }

  img {
    width: 80%;
    border-radius: 4px;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    > div {
      width: 528px;
    }

    img {
      justify-self: center;
    }
  }
`;

export {
  MeetMeSection
}