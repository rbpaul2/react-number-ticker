import './style.css'
import React, {Component} from 'react'
import {render} from 'react-dom'

import {ClockTicker} from './ClockTicker.js'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-number-ticker Demo</h1>
      <div className="Demo-circle">
      	<div className="circleBase">
      <ClockTicker />
      	</div>
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
