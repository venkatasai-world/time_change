import React,{useState} from "react";
import Time_set from './Time'


const Butt=((props)=>
{
    
    return (
  <div className="but1">
    <button onClick={props.onTimeChange}>CurrentTime</button>
  </div>
);

});

export default Butt;