import React from 'react';

class Other extends React.Component {
  static propTypes = {
    say: React.PropTypes.string,
    showCounterClick: React.PropTypes.func
  };

  render() {
    return (
      <p> Well, {this.props.say}!
        <button onClick={this.props.showCounterClick}>Win!</button>
      </p>
    );
  }
}

export default Other;
