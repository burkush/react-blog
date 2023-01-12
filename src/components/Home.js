import { useEffect } from 'react';
import Feed from './Feed';
import styled from 'styled-components';

const StyledStatusMessage = styled.p`
  text-align: center;
  color: #555;
`;

const StyledErrorMessage = styled.p`
  text-align: center;
  color: #f23427;
`;

const Home = ({ posts, fetchError, isLoading }) => {
  useEffect(() => {
    document.title = 'Blog | Home';
  }, []);

  return (
    <main>
      <div className="container">
        {isLoading && (
          <div className="loading-container">
            <div className="dot-flashing"></div>
          </div>
        )}
        {!isLoading && fetchError && (
          <StyledErrorMessage>{fetchError}</StyledErrorMessage>
        )}
        {!fetchError &&
          !isLoading &&
          (posts.length ? (
            <Feed posts={posts} />
          ) : (
            <StyledStatusMessage>No posts to display</StyledStatusMessage>
          ))}
      </div>
    </main>
  );
};

export default Home;
