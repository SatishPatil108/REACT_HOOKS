import React,{useRef} from 'react'

function UseRefone() {

    const inputRef = useRef(null)

    const focusInput = ()=>{
        // focus Input ele
        inputRef.current.focus( )
    }

  return (
    <div>
      <input ref={inputRef} type='text'/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRefone
