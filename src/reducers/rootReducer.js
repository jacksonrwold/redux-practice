const initialState = {
    runs: []
}

export const getRunData = () => (dispatch, getState) => {
    fetch("http://localhost:5000/runs").then(response =>
      response.json().then(responseData => {
        rootReducer.dispatch({ type:"GET_RUNS", payload: responseData})
      })
    )
}

function rootReducer(state = initialState, action) {
    if (action.type === "PLACEHOLDER") {
        return {runs: state.runs}
    } else {
        return state
    }
}

export default rootReducer