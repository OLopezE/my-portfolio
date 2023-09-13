import styled from 'styled-components';

import palette from '../../theme/palette/palette';

const FireLinkSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  background-image: linear-gradient(${palette.dark.accent}a1 4px, transparent 4px), linear-gradient(to right, ${palette.dark.accent}a1 4px, transparent 4px);
  background-size: 140px 140px;

  h1 {
    margin: 0;
    color: ${palette.dark.primary};
    text-shadow: 10px 10px 0 ${palette.dark.secondary};
    font-size: 3.5rem;

    @media (min-width: 800px) {
      font-size: 6rem;
    }
  }

  @media (prefers-color-scheme: light) {
    background-image: linear-gradient(${palette.light.accent} 4px, transparent 4px), linear-gradient(to right, ${palette.light.accent} 4px, transparent 4px);

    h1 {
      text-shadow: 10px 10px 0 ${palette.light.secondary}a1;
    }
  }
`;

export { FireLinkSection };