import './TickerDigit.css'

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group';

class TickerDigit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurr: true,
      hidePrev: true,
      prev: this.props.value
    };


    

    this.onDigitOutExit = this.onDigitOutExit.bind(this);
    this.onDigitOutExited = this.onDigitOutExited.bind(this);

    this.onDigitInEntered = this.onDigitInEntered.bind(this);

    this.onDigitOutEntered = this.onDigitOutEntered.bind(this);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Toggle show to start exit animation
    if (prevProps.value != this.props.value)
    {
      //hide digit out and show digit in-> onDigitOutEntered
      this.setState({
        showCurr: true,
        hidePrev: true,
        prev: prevProps.value
      });
    }
    return null;
  }

  componentDidUpdate() {

  }

  //Update state then for DigitIn in=true, on

  onDigitOutExit() {
  }


  onDigitOutExited() {
  }

  onDigitInEntered(node, isAppearing) {
    this.setState({ 
      hidePrev: false,
      prev: this.props.value
    }); 
  }

  onDigitOutEntered(node, isAppearing) {
    //if (isAppearing) return;
    //exit digitin
    this.setState({
        showCurr: false
    }); 
  }

  render() {
    return (
      <div className="tickerDigitWrapper">
      <CSSTransition
                    in={this.state.showCurr}
                    timeout={{
                             enter: 300,
                             exit: 0
                            }}
                    classNames="tickerDigitIn"
                    appear={true}
                    onEntered={this.onDigitInEntered}
                  >
                    
                    <div className="tickerDigitIn" 
                          style={{
                                    transitionDelay: (this.props.delay + 200) + "ms"
                                }}
                          >
                          { this.props.value }
                    </div>
      </CSSTransition>
      <CSSTransition
                    in={!this.state.hidePrev}
                    timeout={{
                             enter: 0,
                             exit: 300
                            }}
                    classNames="tickerDigitOut"
                    appear={true}
                    onEntered={this.onDigitOutEntered}
                    onExited={this.onDigitOutExited}
                    onExit={this.onDigitOutExit}
                  >
                    
                    <div className="tickerDigitOut"
                          style={{
                                    transitionDelay: this.props.delay
                                }}
                          >
                          { this.state.prev } 
                    </div>
      </CSSTransition>
      </div>
    )
  }
}



export {TickerDigit}
