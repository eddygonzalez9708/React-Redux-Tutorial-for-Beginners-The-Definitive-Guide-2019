import {
  ADD_ARTICLE,
  // DATA_LOADED,
  // FAILED_DATA_LOADED
} from '../constants/action-types'

export function addArticle(payload) {
  return {
    type: ADD_ARTICLE,
    payload
  }
}

// Redux-Thunk Implementation

// export function getData() {
//   return function(dispatch) {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(json => {
//         dispatch({
//           type: DATA_LOADED,
//           payload: json 
//         })
//       })
//       .catch(() => {
//         dispatch({ type: FAILED_DATA_LOADED })
//       })
//   }
// }

// Redux-Saga Implementation

export function getData() {
  return { type: "DATA_REQUESTED" }
}