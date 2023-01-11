import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticle = styled.article`
  margin-bottom: 40px;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: translateX(-10px);
  }
`;

const StyledTitle = styled.h2`
  margin-bottom: 5px;
  padding-left: 10px;
`;

const StyledDate = styled.p`
  margin-bottom: 15px;
  color: #555;
  padding-left: 10px;
  font-size: 0.9rem;
`;

const StyledBody = styled.p`
  padding-left: 10px;
  line-height: 1.5;
`;

const Post = ({ post }) => {
  return (
    <StyledArticle>
      <Link to={`post/${post.id}`}>
        <StyledTitle>{post.title}</StyledTitle>
        <StyledDate>{post.datetime}</StyledDate>
        <StyledBody>
          {post.body.length <= 100
            ? post.body
            : `${post.body.slice(0, 100)}...`}
        </StyledBody>
      </Link>
    </StyledArticle>
  );
};

export default Post;
