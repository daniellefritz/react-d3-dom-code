import React from 'react';
import {render} from 'react-dom';

class InputForm extends React.Component {
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
    event.preventDefault();
    const { captureYear } = this.props;
    captureYear(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a year to see past sales:<br/>
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>&nbsp;
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default InputForm;