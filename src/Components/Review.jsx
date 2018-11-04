import React, { Component } from 'react'
import Spinner from './Spinner'
import axios from 'axios'

class Review extends Component {
  constructor (props) {
    super(props)

    this.state = {
      apiUrl: `${props.apiUrl}/${props.reviewKey}`,
      review: {},
      isLoading: true
    }
  }

  componentDidMount () {
    axios.get(this.state.apiUrl)
      .then(res => this.setState({
        review: res.data,
        isLoading: false
      }))
  }

  render () {
    if (this.state.isLoading) {
      return Spinner()
    }

    return (
      <div className='panel panel-default col-lg-4'>
        <div className='panel-heading'>
          <a
            href={this.state.review.link}
            target='_blank'
            rel='noopener noreferrer'>
            {this.state.review.header}
          </a>
        </div>
        <div className='panel-body'>
          <ul className='list-group'>
            {this.state.review.results.map((r, i) => <li className='list-group-item' key={i}>{r}</li>) }
          </ul>
        </div>
      </div>
    )
  }
}

export default Review
