import React, { Component } from 'react'
import Review from './Review.jsx'
import axios from 'axios'

class ReviewList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      apiUrl: props.apiUrl,
      loading: true,
      reviews: [ ]
    }
  }

  componentDidMount () {
    axios.get(this.state.apiUrl)
      .then(res => this.setState({
        reviews: res.data,
        loading: false
      }))
  }

  render () {
    return (
      <div className='ReviewList'>
        { this.state.reviews.map((r, index) =>
          <Review
            apiUrl={this.state.apiUrl}
            reviewKey={r}
          />
        )}
      </div>
    )
  }
}

export default ReviewList
