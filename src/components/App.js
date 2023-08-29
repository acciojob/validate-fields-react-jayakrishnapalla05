
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
   const [user,setUser]=useState("");
   const [password,setPassword]=useState("");
   const [error,setError]=useState(false);

  function check(){
    if(!user && !password)
    {
      setError(true);
    }
    else if(!user || !password)
    {
      setError(true);
    }
    else{
      setError(false);
      setUser("");
      setPassword("");
    }
  }




  return (
    <div>
        {/* Do not remove the main div */}

        <label>Username:</label>
        <input type="text"  value={user} onChange={(e)=>setUser(e.target.value)}/>
        <label>Password:</label>
        <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {
          error?<p id="errorMessage">Both username and password are required.</p>:""
        }
        <br/>
        <button type="button" onClick={check}>Login</button>
    </div>
  )
}

export default App
