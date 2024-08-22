import './App.css';
import { useState } from 'react';
function App() {
const [val,setVal]=useState('')

const value=(event)=>{
  setVal(val+event.target.value)
}
const ac=()=>{
  setVal('')
}
const del=()=>{
  setVal(val.slice(0,-1))
}
const eq=()=>{
  setVal(eval(val))
}
  return (
    <div className="container">
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input type='text' value={val}/>
          </div>
          <div>
            <input type='button' value="AC" onClick={ac}></input>
            <input type='button' value="DE" onClick={del}></input>
            <input type='button' value="." onClick={value}></input>
            <input type='button' value="/" onClick={value}></input>
          </div>
          <div>
            <input type='button' value="7" onClick={value}></input>
            <input type='button' value="8" onClick={value}></input>
            <input type='button' value="9" onClick={value}></input>
            <input type='button' value="*" onClick={value}></input>
          </div>
          <div>
            <input type='button' value="4" onClick={value}></input>
            <input type='button' value="5" onClick={value}></input>
            <input type='button' value="6" onClick={value}></input>
            <input type='button' value="+" onClick={value}></input>
          </div>
          <div>
            <input type='button' value="1" onClick={value}></input>
            <input type='button' value="2" onClick={value}></input>
            <input type='button' value="3" onClick={value}></input>
            <input type='button' value="-" onClick={value}></input>
          </div>
          <div>
            <input type='button' value="00" onClick={value}></input>
            <input type='button' value="0" onClick={value}></input>
            <input type='button' value="=" className='equal'onClick={eq}></input>
            </div>
        </form>
      </div>
    </div>
  );
}

export default App;
