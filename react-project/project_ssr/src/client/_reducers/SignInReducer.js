import { SIGN_IN_USER } from '../_actions/index'

const initialState = {
    type: '',
    payload: null
}
export default (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN_USER.PENDING:
            return Object.assign({}, state, {
                type: action.type,
                payload: action.payload
            })
        case SIGN_IN_USER.SUCCESS:
            return Object.assign({}, state, {
                type: action.type,
                payload: action.payload.data
            })
        case SIGN_IN_USER.FAILED :
            return Object.assign({}, state, {
                type: action.type,
                payload: action.payload
            })
        default:
            return state
    }
}