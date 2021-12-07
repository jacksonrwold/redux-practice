import './App.css';
import { useSelector, useDispatch } from "react-redux"

import { getRunData } from "./reducers/rootReducer"
import { useEffect } from 'react';

function App() {
  const runs = useSelector((state) => state.runs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRunData)
  }, [])

  return (
    <div className="App">
      initial setup
      {console.log(runs)}
    </div>
  );
}

export default App;
