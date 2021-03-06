import { combineReducers } from 'redux'

import session from './session-reducer'

const appReducer = combineReducers({
  session
})

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    state = undefined;
  }

  return appReducer(state, action)
};

export default rootReducer

export * from './session-reducer'