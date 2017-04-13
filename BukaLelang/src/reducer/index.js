import { combineReducers } from 'redux'

import dataReducer from '../reducer/dataReducer.js'

const rootReducer = combineReducers({
  data: dataReducer
})

export default rootReducer
