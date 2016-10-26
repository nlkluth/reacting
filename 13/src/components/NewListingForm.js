import React from 'react';

class NewListingForm extends React.Component {
  static propTypes = {
    listActions: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      picture_url: ''
    };
  }

  handleClick() {
    if (!this.state.name || !this.state.picture_url) {
      return;
    }

    this.props.listActions.addListing(this.state);
  }

  handleChange(key) {
    return (event) => {
      this.setState({
        [key]: event.target.value
      });
    };
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          onChange={this.handleChange('name')}
          value={this.state.name}
        />
        <input
          type="text"
          className="form-control"
          onChange={this.handleChange('picture_url')}
          value={this.state.picture_url}
        />
        <button
          onClick={this.handleClick}
          className="btn btn-primary"
        >
          Add a listing
        </button>
      </div>
    );
  }
}

export default NewListingForm;
