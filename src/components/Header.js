import { Link } from 'react-router-dom';
import Nav from './Nav';
import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-bottom: 30px;
  padding: 15px 0;
  border-bottom: 2px solid #000;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px 50px;
  flex-wrap: wrap;
`;

const StyledTitle = styled.h2`
  font-size: 1.8rem;
`;

const Header = ({ title, search, setSearch }) => {
  return (
    <StyledHeader>
      <div className="container">
        <StyledContainer>
          <Link to="/">
            <StyledTitle>{title}</StyledTitle>
          </Link>
          <Nav search={search} setSearch={setSearch} />
        </StyledContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
