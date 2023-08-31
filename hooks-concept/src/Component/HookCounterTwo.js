import React, { useState } from 'react'

function HookCounterTwo() {
    const intialCount = 0
    const [count,setcount] = useState(intialCount)

    const incrementFive = () =>{

        for(let i=0 ;i<5;i++){
            setcount(prevcount=>prevcount+1)
        }
    }
  
    return (
    <div>
       Hook Count : {count}
       <button onClick={()=>setcount(intialCount)}>Reset</button>
       <button onClick={()=>setcount(prevcount=>prevcount+1)}>Increment</button>
       <button onClick={()=>setcount(prevcount=>prevcount-1)}>Decrement</button>
       <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo
