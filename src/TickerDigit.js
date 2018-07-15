import './TickerDigit.css'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'

const digits = [
  style => <animated.div className='tickerDigit 0' style={{ ...style}}>0</animated.div>,
  style => <animated.div className='tickerDigit 1' style={{ ...style}}>1</animated.div>,
  style => <animated.div className='tickerDigit 2' style={{ ...style}}>2</animated.div>,
  style => <animated.div className='tickerDigit 3' style={{ ...style}}>3</animated.div>,
  style => <animated.div className='tickerDigit 4' style={{ ...style}}>4</animated.div>,
  style => <animated.div className='tickerDigit 5' style={{ ...style}}>5</animated.div>,
  style => <animated.div className='tickerDigit 6' style={{ ...style}}>6</animated.div>,
  style => <animated.div className='tickerDigit 7' style={{ ...style}}>7</animated.div>,
  style => <animated.div className='tickerDigit 8' style={{ ...style}}>8</animated.div>,
  style => <animated.div className='tickerDigit 9' style={{ ...style}}>9</animated.div>
]

class TickerDigit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurr: true,
      value: this.props.value
    };
  }

  render() {

    return (
      <div className="tickerDigitWrapper">
        <Transition
            native
            from={{ opacity: 0, transform: 'translate3d(0,-50%,-50px) rotateX(80deg)' }}
            enter={{ opacity: 1, transform: 'translate3d(0,0%,0%) rotateX(0)' }}
            leave={{ opacity: 0, transform: 'translate3d(0,50%,-50px) rotateX(-80deg)' }}>
            {digits[this.props.value]}
        </Transition>
      </div>
    )
  }
}



export {TickerDigit}
