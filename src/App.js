import { useState } from 'react';
import './App.css';

function App() {
  
  const [state, setState] = useState({
    breakLengh: 5,
    sessionLenght : 25
  })
  

  
  const downBreaklength = () => {
    
    setState((prevstate) => {
      return {
        breakLengh: prevstate.breakLengh - 1,
         sessionLenght : 25
      }
    })
  }
  
  const upBreaklength = () => {
    setState((prevstate) => {
      return {
        breakLengh: prevstate.breakLengh+1,
         sessionLenght : 25
      }
    })
  }
 
  
  return (
    <div className="App">
      <div className="container1">
        
        <div>
          <h1>25 + 5 Clock</h1>
        </div>
        
        <div className="container2">
          <p>Break Length</p>
   
          <button onClick={downBreaklength}>Down</button>
             {state.breakLengh <= 1 ? <p>1</p> : state.breakLengh >= 60 ? <p>60</p>:<p>{ state.breakLengh}</p>}
          <button onClick={upBreaklength}>Up</button>
        </div>
        
        <div className="container3">
          <p>Session Length</p>
          <button>Down</button>
          <p>{ state.sessionLenght}</p>
          <button>Up</button>
        </div>
        
        <div className='container4'>
          <p>Session</p>
          <h1>25 <span> : </span>00</h1>
          
          <div>
            <button>Play</button>
            <button>Break</button>
            <button>Reload</button>
          </div>
          
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
