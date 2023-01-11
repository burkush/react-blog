import routerImg from '../images/router.svg';
import styled from 'styled-components';

const StyledText = styled.p`
  margin-top: 30px;
  line-height: 1.5;
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
  return (
    <main>
      <div className="container">
        <h2>About</h2>
        <StyledText>
          React Router is capable of more than just routing users to different
          components. React Router also has a special way of handling links
          instead of using anchor tags with an href attribute as you would with
          HTML. In addition, React Router comes with custom hooks that allow you
          to access the browser history and pull parameters from URLs to help
          you deliver dynamic content from your React applications.
        </StyledText>
        <StyledImage src={routerImg} alt="React Router" />
      </div>
    </main>
  );
};

export default About;
