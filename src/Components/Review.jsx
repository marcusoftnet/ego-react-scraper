import React, { Component } from 'react'

class Review extends Component {
  constructor (props) {
    super(props)

    this.state = {
      apiUrl: props.apiUrl,
      reviewKey: props.reviewKey
    }
  }
  render () {
    return (
      <h1>{this.state.reviewKey}</h1>
    )
  }
}

export default Review
