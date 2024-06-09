import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="home-logo.svg" alt="" />
          </a>
        </Logo>
      </Content>
    </Container>
  );
};

const Logo = styled.span`
  margin-right: 8px;
  font-size: 6px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;
const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 24px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

export default Header;
