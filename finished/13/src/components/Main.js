import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  };

  render() {
    return (
      <div className="container-fluid">
        <Link to="/">Home</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
