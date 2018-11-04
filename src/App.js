import React, { Component } from 'react'
import './App.css'
import ReviewList from './Components/Review-List'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ReviewList apiUrl='https://j0f1kw9je5.execute-api.us-east-1.amazonaws.com/latest/' />
      </div>
    )
  }
}

export default App
