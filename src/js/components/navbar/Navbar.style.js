import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NavigationBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: black;
  gap: 2px;

  > div {
    background-color: white;
    min-height: 3.5rem;
    > a {
      text-decoration: none;
      color: black;
      font-weight: 600;
    }
  }
  border-bottom: 2px solid black;
`;

const HomeLinkWrapper = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(63,94,251);
    background: radial-gradient(circle, #3f5efb 0%, #fc5546 36%, #3f5efb 76%, #fc5546 99%); 
    background-size: 400%;
    animation: mymove 16s ease infinite alternate;
    transition: 0.1s ease;
    
    :hover {
      font-size: 1.2rem;
    }

    :active {
      font-size: 0.9rem;
    }
    

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

const ContactLinkWrapper = styled.div`

`;

const FeaturedLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: black;
    gap: 1px
    > a {
      background-color: white;
      height: 100%;
      width: 100%;

    }
`;

export {
  ContactLinkWrapper,
  HomeLinkWrapper,
  FeaturedLinks,
  NavigationBar,
};
