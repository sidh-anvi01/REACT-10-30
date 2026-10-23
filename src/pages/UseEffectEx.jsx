import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
const[count,setCount]=useState(0)


    useEffect(()=>{
        console.log("this is evry time ")
    })


    useEffect(()=>{
        console.log("this is one time only")
// hello()

    },[])


    useEffect(()=>{
        console.log("this is on state changing ")
hello()

    },[count])



const hello=()=>{
    console.log("hello from function ")
}


  return (
    <div>
        <h1>this is useEffect class</h1>
      <h1>{count}</h1>


      <button onClick={()=>setCount(count+1)}>change</button>
    </div>
  )
}

export default UseEffectEx
