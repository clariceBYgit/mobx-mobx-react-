import React, { Component } from 'react'

import { 
  CounterBtn,
  CounterDisplay
} from './components'

import { inject, observer } from 'mobx-react'

// inject可以是方法
@inject('counter')
@observer

 class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <CounterBtn onClick={this.props.counter.decrement}>-</CounterBtn>
        <CounterDisplay />
        <CounterBtn onClick={this.props.counter.increment}>+</CounterBtn>
      </div>
    )
  }
}


export default App