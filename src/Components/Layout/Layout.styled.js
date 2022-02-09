import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  &.active {
    color: green;
  }
`;

export const Wrapper = styled.div`
  padding: 12px;
`;
