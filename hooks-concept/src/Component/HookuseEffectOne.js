import React, { useEffect, useState } from 'react'

function HookuseEffectOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        console.log('useEffect - Updating document title')
        document.title = `You have Clicked ${count} Times`
    },[count])

  return (
    <div>
      <input type='text' 
       value={name} 
       onChange={e=>setName(e.target.value)}
       />
      <button onClick={()=>setCount(prevcount=>prevcount+1)}>Counter {count}</button>
    </div>
  )
}

export default HookuseEffectOne
