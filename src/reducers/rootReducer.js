const initialState = {
    placeholder: 0
}

function rootReducer(state = initialState, action) {
    if (action.type === "PLACEHOLDER") {
        return {placeholder: state.placeholder}
    } else {
        return state
    }
}

export default rootReducer