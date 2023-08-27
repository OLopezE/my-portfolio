import styled from 'styled-components';

import palette from '../../theme/palette/palette';

const FireLinkSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${palette.dark.primary};
  background: radial-gradient(circle, ${palette.dark.primary} 34%, ${palette.dark.secondary} 100%);
  background-size: 400% 400%;
	animation: gradient 20s ease infinite;

  @media (prefers-color-scheme: light) {
    background: ${palette.light.primary};
    background: radial-gradient(circle, ${palette.light.primary} 34%, ${palette.light.secondary} 100%);
    background-size: 400% 400%;
	  animation: gradient 20s ease infinite;
  }



  @keyframes gradient {
    0% {
      background-position: 0% 100%;
    }
    25% {
      background-position: 100% 100%;
    }
    50% {
      background-position: 100% 0%;
    }
    75%{
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  h1 {
    margin: 0;
    font-size: 6rem;
    color: ${palette.light.primary};
  }
`;

export { FireLinkSection };