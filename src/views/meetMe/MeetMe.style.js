import styled from 'styled-components'

const MeetMeSection = styled.section`
  display: grid;
  place-content: center;
  /* background-color: ${({ palette }) => palette.accent}; */

  h2, p {
    text-align: left;
  }

  img {
    width: 80%;
    border-radius: 4px;
  }

  @media (min-width: 800px) {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    img {
      justify-self: center;
    }
  }
`;

export {
  MeetMeSection
}