import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px 80px;
  flex-wrap: wrap;
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px 80px;

  & > li > a {
    font-size: 1.3rem;

    &:hover {
      text-decoration: overline;
    }
  }

  @media (max-width: 686px) {
    & {
      flex-grow: 1;
      justify-content: center;
      gap: 20px 40px;
    }
  }
`;

const StyledForm = styled.form`
  @media (max-width: 605px) {
    & {
      flex-grow: 1;
    }
  }
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: 1.1rem;
  padding: 10px 8px;
  border: 2px solid #000;
  outline: none;
  transition: box-shadow 150ms ease-out;

  &:focus,
  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 605px) {
    & {
      width: 100%;
    }
  }
`;

const Nav = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <StyledNav>
      <StyledNavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="post">Post</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </StyledNavList>

      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" style={{ display: 'none' }}>
          Search posts
        </label>
        <StyledInput
          type="text"
          id="search"
          placeholder="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </StyledForm>
    </StyledNav>
  );
};

export default Nav;
