import React from 'react';
import {render} from 'react-dom';
import InputForm from './InputForm';
import BarChart from './BarChart';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.captureYear = this.captureYear.bind(this);

    this.state = {
      yearValue: '',
      chartWidth: 500,
      chartHeight: 300,
      salesData: [
        { month: 'Jan', value: 40 },
        { month: 'Feb', value: 50 },
        { month: 'Mar', value: 65 },
        { month: 'Apr', value: 60 },
        { month: 'May', value: 70 },
        { month: 'Jun', value: 55 },
        { month: 'Jul', value: 80 },
        { month: 'Aug', value: 55 },
        { month: 'Sep', value: 75 },
        { month: 'Oct', value: 50 },
        { month: 'Nov', value: 60 },
        { month: 'Dec', value: 75 }
      ]
    };
  }

  captureYear(year) {
    this.setState({ yearValue: year });
    console.log("Year Selected: " + year);
  }

  render () {
    const {chartHeight, chartWidth, salesData} = this.state;
    return (
      <section>
        <h1>Welcome to <span>WE MAKE WIDGETS&reg;</span> online!</h1>
        <p>For all your <span>WIDGET&reg;</span> needs, come to us first!  We have a proven track record, and can fulfill your <span>WIDGET&reg;</span> needs, under budget with fast delivery!</p>
        <InputForm captureYear={this.captureYear}/>
        <BarChart
          height={chartHeight}
          width={chartWidth}
          data={salesData}
        />
      </section>
    );
  }
}

render(<App/>, document.getElementById('mount-point'));
