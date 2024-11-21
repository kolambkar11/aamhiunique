import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to AamhiUnique's Arena</h2>
      <p>Explore unique services and creators</p>
      <div>
        <h3>Categories</h3>
        <ul>
          <li>
            <Link to="/category/marketplace">Marketplace</Link>
          </li>
          <li>
            <Link to="/category/creators">Creators</Link>
          </li>
          <li>
            <Link to="/category/services">Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
