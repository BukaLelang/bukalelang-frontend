import { combineReducers } from 'redux'

import dataReducers from './dataReducers.js'
import loginReducers from './loginReducers.js'

const rootReducers = combineReducers({
  data: dataReducers,
  login: loginReducers
})

export default rootReducers
