export const FETCH_CURRENT_USER = {
    PENDING: 'FETCH_CURRENT_USER_PENDING',
    SUCCESS: 'FETCH_CURRENT_USER_SUCCESS',
    FAILED : 'FETCH_CURRENT_USER_FAILED'
}
export const FETCH_USER_ACTION = () => async (dispatch, getState, api) => {
    const act = await api.get('/current_user').catch(err => {
        console.log(err)
        dispatch({
            type: FETCH_CURRENT_USER.FAILED,
            payload: false
        })
    })

    dispatch(
        {
            type: FETCH_CURRENT_USER.SUCCESS,
            payload: act
        }
    )
    
}


export const SIGN_IN_USER = {
    PENDING: 'SIGN_IN_USER_PENDING',
    SUCCESS: 'SIGN_IN_USER_SUCCESS',
    FAILED : 'SIGN_IN_USER_FAILED'
}

export const SIGN_IN_USER_ACTION = (data) => async (dispatch, getState, api) => {
    dispatch({
        type: SIGN_IN_USER.PENDING,
        payload: null
    })

    await api.post('/auth', data)
    .then(data =>{
        const dispatcher = dispatch({
            type: SIGN_IN_USER.SUCCESS,
            payload: data
        })

        if(getState().signAuth.payload.success) {
            return window.location = '/test1'
        }

        return dispatcher
    })
    .catch(err => dispatch({
        type: SIGN_IN_USER.FAILED,
        payload: false
    }))
}