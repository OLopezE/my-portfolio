import styled from 'styled-components';

const NavigationBar = styled.div`
  position: fixed;
  display: grid;
  padding: 1rem;
  top: 0;

  @media (min-width: 600px) {
      position: relative;
      height: 86px;
    }

  > button {
    all: unset;
    display: grid;
    gap: 4px;
    width: 40px;

    span {
      width: 100%;
      height: 6px;
      background-color: #F2D98D;
      border-radius: 2px;
      box-shadow: 3px 3px #54728C;
    }

    :active {
      font-size: 1.2rem;
    }

    @media (min-width: 600px) {
      display: none;
    }
  }

  a {
    justify-content: left;
    text-decoration: none;
    color: #F2D98D;
    font-weight: 600;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    transition: 0.1s ease;
    padding: 1rem 0rem;
    text-shadow: 3px 3px #54728C;

    @media (min-width: 600px) {
      justify-content: center;
      font-size: 1.5rem;
    }

    :hover {
      font-size: 1.6rem;
    }
  }

`;

const NavigateOptions = styled.div`
  display: ${({ visible }) => visible ? 'grid' : 'none'};
  left: 4rem;

  @media (min-width: 600px) {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    min-height: 8svh;
  }
`;

export {
  NavigateOptions,
  NavigationBar
};
