const initialState = {
    cities: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CITIES': 
        return {
            ...state,
            cities: action.cities
        }
        default:
        return state
    }
}

export default rootReducer;