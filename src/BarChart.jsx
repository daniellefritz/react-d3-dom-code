import React from 'react';
import * as d3 from "d3";
import ChartAxis from './ChartAxis';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      data: props.data
    };
  }

  render() {
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const labelPadding = 4;
    const valuePadding = 8;
    const labelHeight = 22;
    const width = this.state.width - (margin.left + margin.right);
    const height = this.state.height - (margin.top + margin.bottom);
    const data = this.state.data;
    const transform = 'translate(' + margin.left + ',' + margin.top + ')';

    // The DOM manipulations here are handled by React (virtual DOM),
    // and D3 is doing the rest (xScale and yScale)
    const xScale = d3
      .scaleBand()
      .domain(data.map(function(d) {return d.month}))
      .rangeRound([0, width], .35);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    // These are sub-components to build up the bar chart; we are using the
    // values determined previously by D3 to 'fill in the blanks' in the components
    const rectangles = (data).map(function(d, i) {
      return (
        <rect
          fill = "#006699"
          rx = "3"
          ry = "3"
          key = {i}
          x = {xScale(d.month)}
          y = {yScale(d.value)}
          className = "bar"
          height = {height - yScale(d.value)}
          width = {(xScale.range()[1] / data.length) - 4}
        />
      )
    });

    const labels = (data).map(function(d, i) {
      return (
        <text
          fill = "#fff"
          key = {i}
          x = {xScale(d.month) + labelPadding}
          y = {height - labelPadding}
          className = "label"
          height = {22}
          width = {(xScale.range()[1] / data.length) - labelPadding}
        >{d.month}</text>
      )
    });

    const values = (data).map(function(d, i) {
      return (
        <text
          fill = "#000"
          rx = "3"
          ry = "3"
          key = {i}
          x = {xScale(d.month) + valuePadding}
          y = {yScale(d.value) - valuePadding}
          className = "value"
          height = {height - yScale(d.value)}
          width = {(xScale.range()[1] / data.length) - valuePadding}
        >{d.value}</text>
      )
    });

    // This is the main bar chart component, containing the sub-components above
    // The ChartAxis component (below) is contained in another component file, and it
    // has one DOM manipulation done by D3
    return (
      <div className = "bar_chart_container">
        <svg
          id = 'bar_chart'
          width = {width}
          height = {height}
        >
          <g transform = {transform}>
            {rectangles}
            {labels}
            {values}
          </g>
          <ChartAxis
            yScale={yScale}
            translate={transform}
            width={width}
            height={height}
          />
        </svg>
      </div>
    );
  }
}

export default BarChart;
