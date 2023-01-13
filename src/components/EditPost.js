import { useState, useEffect, useContext } from 'react';
import DataContext from '../context/DataContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../api/posts';
import format from 'date-fns/format';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin-bottom: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled.h2`
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  display: inline-block;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  margin-bottom: 20px;
  font-family: inherit;
  font-size: 18px;
  width: 100%;
  padding: 10px;
  border: 2px solid #000;
  outline: none;
  transition: box-shadow 150ms ease-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  }
`;

const StyledTextArea = styled.textarea`
  margin-bottom: 30px;
  width: 100%;
  max-width: 100%;
  min-height: 200px;
  resize: vertical;
  font-family: inherit;
  font-size: 18px;
  padding: 10px;
  border: 2px solid #000;
  outline: none;

  transition: box-shadow 150ms ease-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  }
`;

const StyledSubmitBtn = styled.button`
  align-self: flex-end;
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

const EditPost = () => {
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  const { posts, setPosts } = useContext(DataContext);

  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      document.title = `Edit: ${post.title}`;
    } else {
      document.title = 'Post not found';
    }
  });

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (id) => {
    if (editTitle && editBody) {
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const updatedPost = {
        id,
        title: editTitle,
        datetime,
        body: editBody,
      };

      try {
        const response = await api.put(`/posts/${id}`, updatedPost);
        setPosts(
          posts.map((post) => (post.id === id ? { ...response.data } : post))
        );
        setEditTitle('');
        setEditBody('');
        navigate('/');
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <StyledMain>
      <div className="container">
        {post && (
          <>
            <StyledTitle>Edit post</StyledTitle>
            <StyledForm onSubmit={(e) => e.preventDefault()}>
              <StyledLabel htmlFor="editTitle">Title:</StyledLabel>
              <StyledInput
                type="text"
                id="editTitle"
                required
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <StyledLabel htmlFor="editBody">Post:</StyledLabel>
              <StyledTextArea
                id="editBody"
                required
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              ></StyledTextArea>
              <StyledSubmitBtn
                type="submit"
                onClick={() => handleEdit(post.id)}
              >
                Submit
              </StyledSubmitBtn>
            </StyledForm>
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
      </div>
    </StyledMain>
  );
};

export default EditPost;
