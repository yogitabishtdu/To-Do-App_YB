import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="All">
              <button>All</button>
            </Link>
          </li>
          <li>
            <Link to="Breakfast">
              <button onClick={handleBreakfast}>Breakfast</button>
            </Link>
          </li>
          <li>
            <Link to="Lunch">Lunch</Link>
          </li>
          <li>
            <Link to="Shakes">Shakes</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
