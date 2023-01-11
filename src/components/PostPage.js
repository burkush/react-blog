import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTitleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px 30px;
  flex-wrap: wrap;

  margin-bottom: 15px;
`;

const StyledTitle = styled.h2`
  margin-bottom: 5px;
`;

const StyledDate = styled.p`
  margin-bottom: 15px;
  color: #555;
  font-size: 0.9rem;
`;

const StyledBody = styled.p`
  line-height: 1.5;
  margin-bottom: 30px;
`;

const StyledDeleteBtn = styled.button`
  font-family: inherit;
  font-size: 1rem;
  padding: 7px;
  background-color: transparent;
  color: #000;
  border: 2px solid #000;
  cursor: pointer;
  transition: all 200ms ease-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

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

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  return (
    <main>
      <div className="container">
        <article>
          {post && (
            <>
              <StyledTitleHeader>
                <StyledTitle>{post.title}</StyledTitle>
                <StyledDeleteBtn onClick={() => handleDelete(post.id)}>
                  Delete post
                </StyledDeleteBtn>
              </StyledTitleHeader>
              <StyledDate>{post.datetime}</StyledDate>
              <StyledBody>{post.body}</StyledBody>
            </>
          )}
          {!post && (
            <StyledNotFound>
              <StyledErrorTitle>Post not found</StyledErrorTitle>
              <StyledGoHome>
                <Link to="/">Go to the home page</Link>
              </StyledGoHome>
            </StyledNotFound>
          )}
        </article>
      </div>
    </main>
  );
};

export default PostPage;
