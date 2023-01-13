import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <Header title="My Blog" />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
