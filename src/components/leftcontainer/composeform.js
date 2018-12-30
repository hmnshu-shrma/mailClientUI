import React, { Component } from 'react';


class ComposeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="form__container">
      <h3 className="form__heading">Compose Mail</h3>
      <form onSubmit={this.handleSubmit}>
      <label className="label">
      Email:
      <input type="email" name="name" />
      </label>
      <label className="label">
      Subject:
      <input type="text" name="email" />
      </label>

      <textarea rows="10">
      Hello there, this is some text in a text area
      </textarea>

      <input type="submit" value="Submit" className="submit__buttton" />
      </form>
      </div>
    );
  }
}

export default ComposeForm;
