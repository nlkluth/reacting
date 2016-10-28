import React from 'react';
import ReactDOM from 'react-dom';

const Other = ({ say }) => (
  <p> Well, {say} </p>
);

Other.propTypes = {
  say: React.PropTypes.string
};

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

ReactDOM.render(<Main />, document.getElementById('root'));
