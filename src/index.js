import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { TickerDigit } from './TickerDigit.js'

export default class ReactNumberTicker extends Component {

  constructor(props) {
    super(props);

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  render() {
    const digits = this.props.value.map((number, index) =>
      <TickerDigit key={index} value={number} delay={((this.props.length-index)*50)}/>
    );

    return <div className="Ticker">
      { digits }
    </div>
  }
}

ReactNumberTicker.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number)
};
