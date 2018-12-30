import React, { Component } from 'react';
import search from  '../../images/search.svg';


class SearchMail extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      query: '',
      results: [],
      hits: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }


  handleSearchSubmit(event) {
    alert('A name was submitted: ' + this.state.query);
    event.preventDefault();
  }

  handleInputChange(event) {
    this.setState({query: event.target.value});
  }
  render() {
    return (
      <div className="sarchmailform">
      <img src={search} className="sarchmailform--icon" alt="search icon"/>
      <form onSubmit={this.handleSearchSubmit}>
      <input
      placeholder="Search for..."
      className="sarchmailform--input"
      ref={input => this.search = input}
      onChange={this.handleInputChange}
      />
      </form>
      </div>
    );
  }
}

export default SearchMail;
