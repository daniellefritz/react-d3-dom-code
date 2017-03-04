import React from 'react';
import {render} from 'react-dom';
import InputForm from './InputForm';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {yearValue: ''};

    this.captureYear = this.captureYear.bind(this);
  }

  captureYear(year) {
    this.setState({yearValue: year});
    console.log("Year Selected: " + year);
  }

  render () {
    return (
      <section>
        <h1>Welcome to <span>WE MAKE WIDGETS&reg;</span> online!</h1>
        <p>For all your <span>WIDGET&reg;</span> needs, come to us first!  We have a proven track record, and can fulfill your <span>WIDGET&reg;</span> needs, under budget with fast delivery!</p>
        <InputForm captureYear={this.captureYear}/>
      </section>
    );
  }
}

render(<App/>, document.getElementById('mount-point'));