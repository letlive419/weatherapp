import React from "react";
import { ReactDOM} from "react";
import Weather from "./Weather";


const api = process.env.REACT_APP_API_KEY;
console.log(api)
function App(){
    
    return (
    <div>
        <h1> {api}</h1>
       
        <Weather />
    </div>
    )
}

export default App;