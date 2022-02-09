import { Outlet, NavLink } from "react-router-dom";
import { Nav, Link, Wrapper } from "./Layout.styled";

function Layout() {
  return (
    <Wrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Nav>
      <hr />
      <Outlet />
      {/* <Toaster /> */}
    </Wrapper>
  );
}

export default Layout;
