import styled from "styled-components";

const ContactCard = styled.a`
  all: unset;
  font-family: Chillax;
  color: #F2D98D;
  text-shadow: 4px 5px #54728C;
  font-size: 3rem;
  transition: 0.4s;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    color: #D9665B;
    border-color: #D9665B;
  }

  @media (min-width: 600px) {
    font-size: 3.5rem;
    text-shadow: 5px 8px #54728C;
  }
`;

const ContactGrid = styled.section`
  display: grid;
  gap: 1rem;
  padding: 2rem 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactTitle = styled.h1`
  text-shadow: 3px 4px #54728C;
  letter-spacing: 8px;
  font-size: 2rem;

  @media (min-width: 600px) {
    font-size: 5rem;
    text-shadow: 5px 8px #54728C;
  }
`;

const ContactContainer = styled.section`
  padding: 1rem;
  @media (min-width: 600px) {
    padding: 5rem 1rem;
  }
`;

export {
  ContactContainer,
  ContactCard,
  ContactGrid,
  ContactTitle
};
