import { FETCH_CURRENT_USER } from '../_actions/index'

const initialState = {
    payload: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CURRENT_USER.PENDING:
            return Object.assign({}, state, {
                payload: null
            })
        case FETCH_CURRENT_USER.SUCCESS:
            return Object.assign({}, state, {
                payload: action.payload.data
            })
        case FETCH_CURRENT_USER.FAILED :
            return Object.assign({}, state, {
                payload: false
            })
        default :
            return state
    }
} 