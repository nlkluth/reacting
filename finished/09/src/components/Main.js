import React from 'react';
import { Link } from 'react-router'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Link to="/details">Details</Link>
        <Link to="/">Home</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
