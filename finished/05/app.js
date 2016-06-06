import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
  render() {
    return (
      <Main />
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.updateSay = this.updateSay.bind(this);
    this.renderOthers = this.renderOthers.bind(this);
    this.showCounterClick = this.showCounterClick.bind(this);
    this.state = {
      say: 'hola',
      counterClicked: 0,
      greetings: [1, 2, 3, 4]
    };
  }

  updateSay(event) {
    this.setState({say: `${event.target.value}!`});
  }

  showCounterClick(index) {
    return () => {
      this.setState({counterClicked: index});
    }
  }

  renderOthers(item, index) {
    return (
      <Other
        say={this.state.say}
        key={index}
        index={index}
        showCounterClick={this.showCounterClick(index)}
      />
    );
  }

  render() {
    return (
      <div>
        {this.state.greetings.map(this.renderOthers)}
        <p> Counter: {this.state.counterClicked} </p>
        <input type="text" onChange={this.updateSay} />
      </div>
    );
  }
}

class Other extends React.Component {
  constructor(props) {
    super(props);
    // this.showCounterClick = this.showCounterClick.bind(this);
  }

  // showCounterClick() {
  //   this.props.showCounterClick(this.props.index);
  // }

  render() {
    return (
      <p> Well, {this.props.say}!
        <button onClick={this.props.showCounterClick}>Win!</button>
      </p>
    );
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'));
