import styled from 'styled-components';

const FireLinkSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 1rem;

  img {
    width: 60%;
    border-radius: 50%;
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