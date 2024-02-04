import styled from 'styled-components'

const MeetMeSection = styled.section`
  > h2 {
    text-align: left;
  }

  margin: 0 auto;

  p {
    text-align: left;
  }

  @media (min-width: 800px) {
    > div {
    width: 30%;
  }
  }
`;

export {
  MeetMeSection
}