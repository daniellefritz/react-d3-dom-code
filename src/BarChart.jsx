import React from 'react';
import * as d3 from "d3";
import ChartAxis from './ChartAxis';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      data: props.data,
    };
  }

  render() {
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const padding = 4;
    const width = this.state.width - (margin.left + margin.right);
    const height = this.state.height - (margin.top + margin.bottom);
    const data = this.state.data;
    const transform = 'translate(' + margin.left + ',' + margin.top + ')';
    const bottomTransform = 'translate(' + margin.left + ',' + (margin.top + height) + ')';

    if (data.length > 0) {
      // The code below figures out the highest number in the y scale, so we can pass
      // that to the ChartAxis component (in the return below)
      const dataPoints = [];
      let maxDataPoint = 0;
      data.forEach(function(elm) {
        dataPoints.push(elm.value);
      });
      maxDataPoint = dataPoints.reduce(function(a, b) {
        return Math.max(a, b);
      });

      // The DOM manipulations (here in this render) are handled by React (virtual DOM);
      // React handles the data, and feeds the data to the react data
      // visualization elements, and D3 is doing the rest (xScale and yScale)
      const xScale = d3
        .scaleBand()
        .domain(data.map(function(d) {return d.month}))
        .rangeRound([0, width], .35);

      const yScale = d3
        .scaleLinear()
        .domain([0, maxDataPoint])
        .range([height, 0]);

      // This is the sub-component that contains the bars for the bar graph
      const rectangles = (data).map(function(d, i) {
        return (
          <rect
            fill = "#006699"
            key = {i}
            x = {xScale(d.month)}
            y = {yScale(d.value)}
            className = "bar"
            height = {height - yScale(d.value)}
            width = {(xScale.range()[1] / data.length) - padding}
          />
        )
      });

      // This is the main bar chart component, containing the sub-components above
      // The ChartAxis component (in the return below) is contained in another component file,
      // and it has one DOM manipulation done by D3
      return (
        <div className = "bar_chart_container">
          <svg
            id = 'bar_chart'
            width = {width}
            height = {height}
          >
            <g transform = {transform}>
              {rectangles}
            </g>

            <ChartAxis
              orient = 'y'
              scale = {yScale}
              translate = {transform}
              width = {width}
              height = {height}
            />

            <ChartAxis
              orient = 'x'
              scale = {xScale}
              translate = {bottomTransform}
              width = {width}
              height = {height}
            />

          </svg>
        </div>
      );
    } else {
      // This is an early return, to account for no data in the data array (the data array
      // that that was passed into the BarChart component)
      return (<div>No Data to Display</div>);
    }
  }
}

export default BarChart;
