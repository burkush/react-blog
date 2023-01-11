import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: auto;
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  const today = new Date();

  return (
    <StyledFooter>
      <span>Copyright &copy; {today.getFullYear()}</span>
    </StyledFooter>
  );
};

export default Footer;
