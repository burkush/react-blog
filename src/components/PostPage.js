import { useEffect, useContext } from 'react';
import DataContext from '../context/DataContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../api/posts';
import styled from 'styled-components';

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

const StyledToolbar = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 10px 30px;
  flex-wrap: wrap;
`;

const StyledEditBtn = styled.button`
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
    background-color: #f23427;
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

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      document.title = `${post.title}`;
    } else {
      document.title = 'Post not found';
    }
  });

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this post?'
    );

    if (confirmed) {
      try {
        await api.delete(`/posts/${id}`);
        const postsList = posts.filter((post) => post.id !== id);
        setPosts(postsList);
        navigate('/');
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <main>
      <div className="container">
        <article>
          {post && (
            <>
              <StyledTitle>{post.title}</StyledTitle>
              <StyledDate>{post.datetime}</StyledDate>
              <StyledBody>{post.body}</StyledBody>

              <StyledToolbar>
                <Link to={`/edit/${post.id}`}>
                  <StyledEditBtn>Edit</StyledEditBtn>
                </Link>
                <StyledDeleteBtn onClick={() => handleDelete(post.id)}>
                  Delete
                </StyledDeleteBtn>
              </StyledToolbar>
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
