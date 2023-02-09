import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavigationBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: black;
  gap: 2px;
  min-height: 3.5rem;

  > a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.1s ease;

    :hover {
      font-size: 1.2rem;
      color: #FFF4EB;
    }

    :active {
      font-size: 0.9rem;
    }
  }

  > div {
    background-color: #FFF4EB;
    > a {
      text-decoration: none;
      color: black;
      font-weight: 600;
      transition: 0.1s ease;

      :hover {
        font-size: 1.2rem;
      }

      :active {
        font-size: 0.9rem;
      }
    }
  }
  border-bottom: 2px solid black;
`;

const HomeLink = styled(Link)`
    background: rgb(63,94,251);
    background: radial-gradient(circle, #3f5efb 0%, #fc5546 36%, #3f5efb 76%, #fc5546 99%); 
    background-size: 400%;
    animation: mymove 16s ease infinite alternate;
    
    @keyframes mymove {
      0% {
        background-position: left;
      }
      50% {
        background-position: right;
      }
      100% {
        background-position: left;
      }
    }
`;

const ContactLink = styled(Link)`
    background-color: #FFF4EB;
    :hover{
        background-color: #fc5546;
      }
`;

const FeaturedLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;

    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      :hover{
        background-color: #3f5efb;
        color: #FFF4EB;
      }
    }
`;

export {
  ContactLink,
  HomeLink,
  FeaturedLinks,
  NavigationBar,
};
