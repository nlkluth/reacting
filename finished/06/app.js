import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

class Parent extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'));
