import React from 'react';

class Search extends React.Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  showSearchValue = e => {
    event.preventDefault;
    alert(this.state.value);
  };

  render() {
    return (
      <form className="search">
        <input
          onChange={this.handleChange}
          value={this.state.value}
          type="text"
          className="search__input"
        />
        <button onClick={this.showSearchValue} className="search__button">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
