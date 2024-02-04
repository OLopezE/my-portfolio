import React, { useContext } from "react";

import styled, { ThemeContext } from "styled-components";

const Main = styled.main`
  background-color: ${({ palette }) => palette.background};
  padding: 1rem;
  display: grid;
  justify-content: center;

  h1, h2, h3, h4, h5, h6, p {
    color: ${({ palette }) => palette.text};
  }

  a {
    color: ${({ palette }) => palette.primary};
  }

  section {
    min-height: 100vh;
    min-height: 100svh;
    max-width: 980px;
  }

  footer {
    background-color: ${({ palette }) => palette.secondary};
    min-height: 10vh;
    min-height: 10svh;
  }
`;

export default Main;
