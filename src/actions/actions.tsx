import * as actionType from '../actionTypes/actionTypes'

export interface RequestToCreateNewClothings { type: actionType.REQUEST_TO_CREATE_NEW_CLOTHINGS }
export interface RequestToCreateNewClothingsSuccess { type: actionType.REQUEST_TO_CREATE_CLOTHINGS_SUCCESS, data: object }
export interface RequestToCreateNewClothingsFail { type: actionType.REQUEST_TO_CREATE_CLOTHINGS_FAIL }

export function requestCreateNewClothings(): RequestToCreateNewClothings {
  return { type:  actionType.REQUEST_TO_CREATE_NEW_CLOTHINGS }
}

export function requestCreateNewClothingsSuccess(data: object): RequestToCreateNewClothingsSuccess {
  return { type:  actionType.REQUEST_TO_CREATE_CLOTHINGS_SUCCESS, data }
}

export function requestCreateNewClothingsFail(): RequestToCreateNewClothings {
  return { type:  actionType.REQUEST_TO_CREATE_NEW_CLOTHINGS }
}

export type closetActions = RequestToCreateNewClothings | RequestToCreateNewClothingsSuccess | RequestToCreateNewClothingsFail
