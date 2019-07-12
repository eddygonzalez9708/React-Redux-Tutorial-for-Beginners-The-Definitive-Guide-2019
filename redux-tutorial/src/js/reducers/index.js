import {
  ADD_ARTICLE,
  DATA_LOADED,
  FAILED_DATA_LOADED,
  FOUND_BAD_WORD } from '../constants/action-types'

const initialState = {
  articles: [],
  remoteArticles: [],
  word_error: false,
  api_error: false
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      word_error: false
    })
  } else if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    })
  } else if (action.type === FAILED_DATA_LOADED) {
    return Object.assign({}, state, { api_error: true })
  } else if (action.type === FOUND_BAD_WORD) {
    return Object.assign({}, state, { word_error: true })
  }

  return state
}

export default rootReducer