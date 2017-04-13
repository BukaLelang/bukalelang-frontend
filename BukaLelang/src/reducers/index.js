import { combineReducers } from 'redux'

import dataReducers from './dataReducers.js'

const rootReducers = combineReducers({
  data: dataReducers
})

export default rootReducers
