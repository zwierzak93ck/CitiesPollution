const initialState = {
    informations: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CITIES_INFORMATIONS':
            return {
                ...state,
                informations: action.informations
            }
        default:
            return state
    }
}

export default rootReducer;