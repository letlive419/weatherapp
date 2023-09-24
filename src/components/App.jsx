import React from "react";
import { ReactDOM} from "react";
import Weather from "./Weather";

const api = process.env.REACT_APP_API_KEY;
function handleClick(){
    alert(api)
}
function App(){
    
    return (
    <div>
        <button onClick={handleClick}> click me to show api</button>
        <Weather />
    </div>
    )
}

export default App;