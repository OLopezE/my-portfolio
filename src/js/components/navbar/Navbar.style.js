import styled from 'styled-components';

const NavigationBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: black;
  gap: 2px;

  > div {
    background-color: white;
    padding: 1rem;
  }
  border-bottom: 2px solid black;
`;

const FeaturedLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    > a {
      text-decoration: none;
      color: black;
    }

  
`;

export { FeaturedLinks, NavigationBar };
