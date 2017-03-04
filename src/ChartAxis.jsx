import React  from 'react';
import * as d3 from "d3";

class ChartAxis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    var node  = this.refs.axis;
    var axis = d3.axisLeft(this.props.yScale);
    // this is D3 manipulating the DOM; because of the complexity of the
    // scale calculation, it would be better to use D3 for this, even at
    // the cost of the performance hit
    d3.select(node).call(axis);
  }

  render() {
    const ySettings = {
      scale: this.props.yScale,
      orient: 'left'
    };
    return (
      <g className="xy-axis" height={this.props.height} width={this.props.width}>
<<<<<<< HEAD
        <g className="axis axis--y" ref="axis" transform={this.props.translate} {...ySettings}></g>
=======
        <g className="axis" ref="axis" transform={this.props.translate} {...ySettings}></g>
>>>>>>> ac2727bf8d9fa2c5a68ec6882e5f01d0226aad4e
      </g>
    );
  }
}

export default ChartAxis;
