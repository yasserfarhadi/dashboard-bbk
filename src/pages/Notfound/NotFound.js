import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h4>Not Found</h4>
      <Link to="/">Login</Link>
    </div>
  );
}

export default NotFound;
