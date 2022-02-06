import { Outlet, NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  &.active {
    color: green;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  padding: 12px;
`;

function Layout() {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <Outlet />
      {/* <Toaster /> */}
    </Wrapper>
  );
}

export default Layout;
