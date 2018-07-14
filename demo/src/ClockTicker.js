import React, {Component} from 'react'
import ReactNumberTicker from '../../src'

export class ClockTicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 10};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      value: prevState.value + 1
    }));
  }

  render() {
    return (
      <div className="ClockTicker">
        <ReactNumberTicker value={this.state.value.toString(10).split('').map(Number)}/>
      </div>
    );
  }
}