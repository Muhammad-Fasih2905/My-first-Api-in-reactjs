import React, { useState,useEffect } from "react";

const Hook = () =>{
    const [count, setCount] = useState(0);
    const IncNum = () =>{
        setCount(count + 1);
    } 
    // useEffect(() => {
    //     alert('Iam clicked');
    //   });


    return(
        <>
        <h1> {count} </h1>
        <button className="button-1" onClick={IncNum}>Click Me </button>
        <button className="button-2" onClick={IncNum}>+</button>
        <button className="button-3" disabled={count === 0} onClick={() => setCount(count - 1)}>
        -
        </button>
        </>
    )
}
export default Hook;