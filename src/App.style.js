import React, { useContext } from "react";

import styled, { ThemeContext } from "styled-components";

const Main = styled.main`
  background-color: ${({ palette }) => palette.background};

  h1, h2, h3, h4, h5, h6, p {
    color: ${({ palette }) => palette.text};
  }

  section {
    min-height: 100vh;
    min-height: 100svh;
  }
`;

export default Main;
