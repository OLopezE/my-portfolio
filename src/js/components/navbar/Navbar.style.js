import styled from 'styled-components';

const NavigationBar = styled.div`
  position: fixed;
  display: grid;
  padding: 1rem;
  top: 0;

  @media (min-width: 600px) {
      position: relative;
      min-height: 7rem;
      padding: 1rem;
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
`;

const NavigateOptions = styled.div`
  background: rgb(84,114,140);
  background: radial-gradient(circle, rgba(84,114,140,1) 60%, rgba(217,102,91,1) 100%);
  display: ${({ visible }) => visible ? 'grid' : 'none'};
  margin-top: 1rem;
  padding: 1rem;
  border: 2px solid black;
  box-shadow: 8px 8px black;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    overflow: hidden;
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
    text-shadow: 3px 3px #2A3E59;
    border-bottom: 1px solid black;

    @media (min-width: 600px) {
      justify-content: center;
      font-size: 1.8rem;
      border-bottom: none;
    }

    :hover {
      transform: scale(1.1);
    }
  }

`;

export {
  NavigateOptions,
  NavigationBar
};
