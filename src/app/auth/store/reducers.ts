import {Action, createReducer, on} from '@ngrx/store'
import {AuthStateInterface} from '../types/authState.interface'
import {registerAction} from './actions/register.action'

const initialState: AuthStateInterface = {
  isSubmittying: false,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmittying: true,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
