import styled from 'styled-components';

import palette from './theme/palette/palette';

const Main = styled.main`
  background-color: ${palette.dark.background};
  color: ${palette.dark.text};

  section {
    min-height: 100svh;
  }

  @media (prefers-color-scheme: light) {
    color: ${palette.light.text};;
    background-color: ${palette.light.background};
  }
`;

export default Main;
