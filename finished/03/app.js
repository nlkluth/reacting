import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      say: 'hola'
    };
  }

  render() {
    return (
      <Other say={this.state.say} />
    );
  }
}

class Other extends React.Component {
  render() {
    return (
      <p> Well, {this.props.say}! </p>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
