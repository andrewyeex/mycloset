import { closetActions } from '../actions/actions'
import {
  REQUEST_TO_CREATE_NEW_CLOTHINGS,
  REQUEST_TO_CREATE_CLOTHINGS_SUCCESS,
  REQUEST_TO_CREATE_CLOTHINGS_FAIL
} from '../actionTypes/actionTypes'

export interface StoreState {
  data: object
}

export function closet(state: StoreState, action: closetActions): StoreState {
  switch(action.type){
    case REQUEST_TO_CREATE_NEW_CLOTHINGS:
      return {
        ...state,
        data: {}
      }
    case REQUEST_TO_CREATE_CLOTHINGS_SUCCESS:
      return {
        ...state,
        data: action.data
      }
    case REQUEST_TO_CREATE_CLOTHINGS_FAIL:
      return {
        ...state,
        data: {}
      }

  }
  return state;
}