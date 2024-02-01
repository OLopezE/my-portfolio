import styled from 'styled-components';

const FireLinkSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 1rem;
  padding: 1rem;

  img {
    width: 60%;
    border-radius: 50%;
  }

  > div {

  }

  h1, h2, p {
    margin: 0;
    text-align: left;
  }

  p {
    margin-left: 1rem;
  }

  h2 {
    margin-left: 0.5rem;
  }

  h1 {
    color: ${({ palette }) => palette.primary}
  }

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 4rem;

    img {
      width: 30%;
    }
  }
`;

export { FireLinkSection };