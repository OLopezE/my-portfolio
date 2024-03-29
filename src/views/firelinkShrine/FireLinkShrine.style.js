import styled from 'styled-components';

const FireLinkSection = styled.section`
  display: grid;
  place-content: center;

  img {
    width: 300px;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 2rem;

    @media (min-width: 800px) {
      flex-direction: row;
      gap: 4rem;

      img {
        width: 30%;
      }
    }
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
`;

export { FireLinkSection };