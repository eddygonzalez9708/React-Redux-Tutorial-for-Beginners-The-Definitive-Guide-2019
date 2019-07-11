import React from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import List from './List'

const mapStateToProps = state => {
  return { error: state.error }
}

const App = ({ error }) => (
  <div className='row mt-5'>
    <div className='col-md-4 offset-md-1'>
      <h2>Articles</h2>
      {error ? "FOUND BAD WORD" : null}
      <Form />
      <List />
    </div>
  </div>
)

export default connect(mapStateToProps)(App)