import React from 'react';
import { Link } from 'react-router';

const Main = ({ children }) => (
  <div className="container-fluid">
    <Link to="/">Home</Link>
    {children}
  </div>
);

Main.propTypes = {
  children: React.PropTypes.element
};

export default Main;
