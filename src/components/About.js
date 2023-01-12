import { useEffect } from 'react';
import routerImg from '../images/book.svg';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  margin-bottom: 30px;
`;

const StyledText = styled.p`
  line-height: 1.5;
  margin-bottom: 5px;
`;

const StyledImage = styled.img`
  max-width: 350px;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: 430px) {
    & {
      max-width: 250px;
    }
  }
`;

const About = () => {
  useEffect(() => {
    document.title = 'Blog | About';
  }, []);

  return (
    <main>
      <div className="container">
        <StyledTitle>About</StyledTitle>
        <StyledText>
          The artist is the creator of beautiful things. To reveal art and
          conceal the artist is art’s aim. The critic is he who can translate
          into another manner or a new material his impression of beautiful
          things.
        </StyledText>
        <StyledText>
          The highest as the lowest form of criticism is a mode of
          autobiography. Those who find ugly meanings in beautiful things are
          corrupt without being charming. This is a fault.
        </StyledText>
        <StyledText>
          Those who find beautiful meanings in beautiful things are the
          cultivated. For these there is hope. They are the elect to whom
          beautiful things mean only beauty.
        </StyledText>
        <StyledText>
          There is no such thing as a moral or an immoral book. Books are well
          written, or badly written. That is all.
        </StyledText>
        <StyledImage src={routerImg} alt="Open book" />
      </div>
    </main>
  );
};

export default About;
