import styled from 'styled-components';

import palette from '../../theme/palette/palette';

const FireLinkSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  background-image: linear-gradient(${palette.dark.accent}80 4px, transparent 4px), linear-gradient(to right, ${palette.dark.accent}80 4px, transparent 4px);
  background-size: calc(99vw / 4) calc(99vw / 4);
  padding: 0 2rem;

  > div {
    padding: 1rem;
    background-color: ${palette.dark.primary};
    box-shadow: 10px 10px 0 ${palette.dark.secondary}a1;
  }

  h1 {
    margin: 0;
    color: ${palette.dark.accent};
    font-size: 3.5rem;
    text-shadow: 5px 5px 0 ${palette.dark.secondary};
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 6rem;
      text-shadow: 10px 10px 0 ${palette.dark.secondary};
    }

    background-size: calc(99vw / 10) calc(99vw / 10);
  }

  @media (prefers-color-scheme: light) {
    background-image: linear-gradient(${palette.light.accent}80 4px, transparent 4px), linear-gradient(to right, ${palette.light.accent}80 4px, transparent 4px);

    > div {
    padding: 1rem;
    background-color: ${palette.light.secondary};
    box-shadow: 10px 10px 0 ${palette.light.secondary}a1;
  }

    h1 {
      color: ${palette.light.accent};
      text-shadow: 5px 5px 0 ${palette.light.primary};
    }

    @media (min-width: 800px) {
      h1 {
        font-size: 6rem;
        text-shadow: 10px 10px 0 ${palette.light.primary}a1;
      }
  }
}
`;

export { FireLinkSection };