import { useState } from "react";



function Counter() {
  const [count,setCount]=useState(0);
  const handleAdd=()=>{
    setCount(count+1)
    console.log("+clicked");
  }
  const handleSub=()=>{
    setCount(count-1)
    console.log("-clicked");
  }
  return (
    <div>\
    <h2>counter</h2>
    <h3>{count}</h3>
    <button onClick={handleSub} style={{padding:8,backgroundColor:"#049690",margin:4,color:"white"}}>-</button>
    <button onClick={handleAdd}style={{padding:8,backgroundColor:"#049690",margin:4,color:"white"}}>+</button>
    </div>
  )
}

export default Counter;