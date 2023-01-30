import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <input type="search" placeholder="Search Products..." />
      <nav>
        {/* Relative Links are link which do not start with forward slash unline absolute links */}
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
