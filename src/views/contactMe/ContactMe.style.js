import styled from "styled-components";

const ContactMeMomo = styled.div`
  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 800px) {
    position: fixed;
    bottom: 4rem;
    left: 4rem;

    ul {
      flex-direction: column;
    }

    a {
      opacity: 40%;
      transition: 0.3s;

      &:hover {
        opacity: 100%;
      }
    }
  }
`;

export default ContactMeMomo;