import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const StyledNavLink = ({ to, children }: { to: string; children: ReactNode }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "")}>
      {children}
    </NavLink>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center h-16 gap-3 px-4">
        <li>
          <StyledNavLink to="/">HOME</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/simple-string">간단</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/simple-string-with-delay">
            간단+딜레이
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/hovered-with-delay-ms">복합</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/discriminated-unions">공통 속성</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
