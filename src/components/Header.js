import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa';
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
  display: flex;
`;

const StyledIcon = styled.span`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({ title }) => {
  const { width } = useWindowSize();

  return (
    <StyledHeader>
      <div className="container">
        <StyledContainer>
          <Link to="/">
            <StyledTitle>
              <StyledIcon>
                {width < 768 ? (
                  <FaMobileAlt />
                ) : width < 992 ? (
                  <FaTabletAlt />
                ) : (
                  <FaLaptop />
                )}
              </StyledIcon>
              <span>{title}</span>
            </StyledTitle>
          </Link>
          <Nav />
        </StyledContainer>
      </div>
    </StyledHeader>
  );
};

export default Header;
