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
    const { scale, orient } = this.props;
    const axisRef = `axis${orient}`;
    const node  = this.refs[axisRef];

    let axis = d3.axisLeft(scale);
    if (this.props.orient === 'x') {
      axis = d3.axisBottom(scale);
    }

    // This is D3 manipulating the DOM; because of the complexity of the
    // scale calculation, it would be better to use D3 for this, even at
    // the cost of the performance hit
    //
    // node is the react node, D3 is calling the correct axis to be applied
    // to this node
    d3.select(node).call(axis);
  }

  render() {
    const { scale, orient, translate } = this.props;
    const settings = { scale, orient };
    const className = `axis--${orient}`;
    const ref = `axis${orient}`;

    return (
      <g className={className} ref={ref} transform={translate} {...settings}></g>
    );
  }
}

export default ChartAxis;
