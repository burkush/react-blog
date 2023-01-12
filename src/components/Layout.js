import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ search, setSearch, width }) => {
  return (
    <StyledLayout>
      <Header
        title="My Blog"
        search={search}
        setSearch={setSearch}
        width={width}
      />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
