import React from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Posts from './Posts'
import List from './List'

const mapStateToProps = state => {
  return { error: state.error }
}

const App = ({ error }) => (
  <div className='row mt-5'>
    <div className='col-md-4 offset-md-1'>
      <h2>Articles</h2>
      {error ? "FOUND BAD WORD" : null}
      <List />
    </div>
    <div className='col-md-4 offset-md-1'>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className='col-md-4 offset-md-1'>
      <h2>API posts</h2>
      <Posts />
    </div>
  </div>
)

export default connect(mapStateToProps)(App)