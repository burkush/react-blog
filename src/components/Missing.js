import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/404.svg';
import styled from 'styled-components';

const StyledNotFound = styled.div`
  text-align: center;
`;

const StyledErrorTitle = styled.h2`
  margin-bottom: 20px;
`;

const StyledGoHome = styled.p`
  &:hover > a {
    text-decoration: underline;
  }
`;

const StyledImage = styled.img`
  max-width: 350px;
  height: auto;
`;

const Missing = () => {
  useEffect(() => {
    document.title = 'Page not found';
  }, []);

  return (
    <StyledNotFound>
      <StyledErrorTitle>Page not found</StyledErrorTitle>
      <StyledGoHome>
        <Link to="/">Go to the home page</Link>
      </StyledGoHome>
      <StyledImage src={notFound} alt="Page not found" />
    </StyledNotFound>
  );
};

export default Missing;
