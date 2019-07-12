import React from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Posts from './Posts'
import List from './List'

const mapStateToProps = state => {
  return {
    word_error: state.word_error,
    api_error: state.api_error
  }
}

const App = ({
  word_error,
  api_error }) => (
  <div>
    <div className='d-flex flex-column align-items-center'>
      <h2>Add a New Article</h2>
      <Form />
    </div>
    <div className='row mt-5'>
     <div className='col-md-4 offset-md-1'>
      <h2>Your Articles</h2>
      {word_error ? "FOUND BAD WORD" : null}
      <List />
    </div>
    <div className='col-md-4 offset-md-1'>
      <h2>Public Articles</h2>
      {api_error ? "API ERROR" : null}
      <Posts />
    </div>
    </div>
  </div>
)

export default connect(mapStateToProps)(App)