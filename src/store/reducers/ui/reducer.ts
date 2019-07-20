import { fromJS } from 'immutable'

import { TOGGLE_DRAWER } from './constants'

const initialState = fromJS({
  drawer: false,
})

interface Action {
  type: string
  payload: any
}

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return state.set('drawer', !state.get('drawer'))
    default:
      return state
  }
}
