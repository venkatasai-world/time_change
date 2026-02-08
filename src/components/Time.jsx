import React,{useState} from "react";
import Butt from './Button';

const Time_set=(()=>
    {
        const [tim,fun]=useState(new Date().toLocaleTimeString());
        function new_time()
        {
            fun(new Date().toLocaleTimeString())
        }
        
        console.log("time has been executed")

        return (
            <div>
            <h1>{tim}</h1>
            <Butt onTimeChange={new_time} /></div>

        )

    }
)
export default Time_set;