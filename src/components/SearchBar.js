import React, { Component } from 'react';
class SearchBar extends Component {
  state = {
    value: ''
  };

  submitForm = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  updateValue = event => {
    // Updates the state a for search bar typing
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="Search Epic username"
            value={this.state.value}
            onChange={this.updateValue}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
