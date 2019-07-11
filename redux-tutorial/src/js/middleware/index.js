import {
  ADD_ARTICLE,
  FOUND_BAD_WORD } from '../constants/action-types'

const forbiddenWords = ['spam', 'money']

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_ARTICLE) {
        const found = forbiddenWords.filter(word =>
          action.payload.title.includes(word) 
        )

        if (found.length) {
          return dispatch({ type: FOUND_BAD_WORD })
        }
      }

      return next(action)
    }
  }
}