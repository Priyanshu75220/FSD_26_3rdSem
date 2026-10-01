import { useState, useEffect } from "react";
 const [coutn ,setCount]=useState(0);
 const [calculation,setCalculation]=useState(0);
 console.log(count);
 useEffect(()=>{
    setCalculation=count*2;
 },[count]);
 setCount(2);