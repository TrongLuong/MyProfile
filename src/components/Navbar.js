import React from "react";
import "./navbar.scss";
import { Link } from "react-scroll";
export default function Navbar({ data }) {
  return (
    <nav className="navbar" id="navbar">
      <ul>
        {data.map((items) => {
          return (
            <li key={items.id}>
              <Link
                href={items.name}
                to={items.name}
                smooth={true}
                spy={true}
                duration={100}
                offset={0}
                activeClass="active"
              >
                {items.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
