import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notFound-container">
      <h1><em>404</em></h1>
      <h1>...Just A Minor Kitchen Mishap</h1>

      <p className="notFoundText">Nothing To See Here...</p>

      <p className="smallCaps textCenter">
        <Link to="/foodHunt/home" className="link">Let's Head Back Home</Link>
      </p>
    </div>
  )
};

export default NotFound;
