import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navigationRow flex justify-between items-center py-7">
          <h2 className="font-semibold text-[35px]">Logo</h2>
          <div className="navMenu">
            <ul className="flex gap-10">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Forum</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
