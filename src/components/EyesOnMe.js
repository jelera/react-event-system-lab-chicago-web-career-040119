import React, { Component } from 'react'

class EyesOnMe extends Component {
  focusHandler = () => {
    console.log('Good!')
  }

  blurHandler = () => {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.focusHandler} onBlur={this.blurHandler} ></button>
    )
  }
}

export default EyesOnMe
