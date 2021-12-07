const initialState = {
    runs: ["hi"]
}

export async function getRunData(dispatch, getState) {
    await fetch("http://localhost:5000/runs").then(response =>
      response.json().then(responseData => {
        dispatch({ type:"GET_RUNS", payload: responseData})
      })
    )
}

function rootReducer(state = initialState, action) {
    if (action.type === "GET_RUNS") {
        return {runs: action.payload}
    } else {
        return state
    }
}

export default rootReducer