import { useEffect } from 'react';
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

const NewPost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody,
}) => {
  useEffect(() => {
    document.title = 'Blog | Create a new post';
  }, []);

  return (
    <StyledMain>
      <div className="container">
        <StyledTitle>Create a new post</StyledTitle>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="postTitle">Title:</StyledLabel>
          <StyledInput
            type="text"
            id="postTitle"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <StyledLabel htmlFor="postBody">Post:</StyledLabel>
          <StyledTextArea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></StyledTextArea>
          <StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
        </StyledForm>
      </div>
    </StyledMain>
  );
};

export default NewPost;
