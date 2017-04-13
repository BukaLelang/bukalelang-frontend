import * as ActionTypes from '../actions/constant.js'

// INITIAL STATE FOR REDUCER
const init = {
  name: 'jacky'
}

const dataReducer = (state = init, action) => {
  switch (action.type) {
    case ActionTypes.GET_DATA: {
      return state
    }
    default: return state
  }
}

export default dataReducer
