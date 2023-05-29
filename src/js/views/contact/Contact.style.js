import styled from "styled-components";

const ContactCard = styled.a`
  all: unset;
  font-family: Chillax;
  color: #F2D98D;
  text-shadow: 5px 8px #54728C;
  font-size: 3.5rem;
  transition: 0.4s;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    color: #D9665B;
    border-color: #D9665B;
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
  text-shadow: 5px 8px #54728C;
  letter-spacing: 8px;

  @media (min-width: 600px) {
    font-size: 5rem;
  }
`;

const ContactContainer = styled.section`
  padding: 6rem 1rem;
`;

export {
  ContactContainer,
  ContactCard,
  ContactGrid,
  ContactTitle
};
