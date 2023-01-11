import Feed from './Feed';
import styled from 'styled-components';

const StyledNoPostsMessage = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #555;
`;

const Home = ({ posts }) => {
  return (
    <main>
      <div className="container">
        {posts.length ? (
          <Feed posts={posts} />
        ) : (
          <StyledNoPostsMessage>No posts to display</StyledNoPostsMessage>
        )}
      </div>
    </main>
  );
};

export default Home;
