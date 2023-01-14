import { useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import Feed from './Feed';
import styled from 'styled-components';

const StyledStatusMessage = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #555;
  margin-bottom: 30px;
`;

const StyledErrorMessage = styled.p`
  text-align: center;
  color: #f23427;
`;

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  const postCount = useStoreState((state) => state.postCount);

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
          (searchResults.length ? (
            <div>
              <StyledStatusMessage>
                {postCount === 1 ? `${postCount} post` : `${postCount} posts`}
              </StyledStatusMessage>
              <Feed posts={searchResults} />
            </div>
          ) : (
            <StyledStatusMessage>No posts to display</StyledStatusMessage>
          ))}
      </div>
    </main>
  );
};

export default Home;
