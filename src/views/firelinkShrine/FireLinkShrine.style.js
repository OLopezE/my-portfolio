import styled from 'styled-components';

import palette from '../../theme/palette/palette';

const FireLinkSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 0;
    color: ${palette.light.primary};
    font-size: 3.5rem;

    @media (min-width: 800px) {
      font-size: 6rem;
    }
  }
`;

export { FireLinkSection };