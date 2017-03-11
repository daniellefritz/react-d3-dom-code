import React from 'react';
import {render} from 'react-dom';
import InputForm from './InputForm';
import BarChart from './BarChart';
import salesData from './salesData.json';

import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.captureYear = this.captureYear.bind(this);

    this.state = {
      yearValue: '',
      chartWidth: 500,
      chartHeight: 300,
      salesData: [],
    };
  }

  captureYear(year) {
    let data = salesData[year];
    if (!data){
      data = [];
    }
    this.setState({
      salesData: data,
      yearValue: year
    });
  }

  render () {
    const {chartHeight, chartWidth, salesData} = this.state;

    return (
      <section>
        <h1>Welcome to <span>WE MAKE WIDGETS&reg;</span> online!</h1>
        <p>For all your <span>WIDGET&reg;</span> needs,
         come to us first!  We have a proven track record, and can fulfill your <span>WIDGET&reg;</span> needs, under budget with fast delivery!</p>
        <InputForm captureYear={this.captureYear}/>
        <BarChart
          height = {chartHeight}
          width = {chartWidth}
          data = {salesData}
        />
      </section>
    );
  }
}

render(<App/>, document.getElementById('mount-point'));
