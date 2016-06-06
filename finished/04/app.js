import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
  render() {
    console.log('parent render');

    return (
      <Main />
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateSay = this.updateSay.bind(this);
    this.state = {
      say: 'hola'
    };
  }

  updateSay() {
    this.setState({say: `${this.state.say}!`});
  }

  render() {
    console.log('Main Render');

    return (
      <div>
        <Other say={this.state.say} />
        <button onClick={this.updateSay}>Click</button>
      </div>
    );
  }
}

class Other extends React.Component {
  componentDidMount() {
    console.log('Other componentDidMount');
  }

  render() {
    console.log('Other Render');
    return (
      <p> Well, {this.props.say}! </p>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'));
