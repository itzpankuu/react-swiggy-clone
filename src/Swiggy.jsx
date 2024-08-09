import { useState } from "react";

function Swiggy(props){

    const [btn, change] = useState(false);
    
    const toggler = () =>{
        change(!btn);
     
    }

    return(
    <>
        <div className="box" style={{
            filter: btn == true? 'grayscale(1)' : 'grayscale(0)'
        }}> 
        <img src={props.source} alt="" />
        <div className="title">{props.title}</div>
        <div className="flex">
            <div>⭐{props.rating}</div>
            <div>{props.time} mins</div>
        </div> 
        <div className="flex">  
            <div>
            <p className="area">{props.desc}</p>
            <p className="area">{props.desc1}</p>
            </div> 

            <div>
                <button onClick={toggler}>{btn == false?  "ADD" : "REMOVE"}</button>
            </div>

        </div> 
        </div>


    </>
        
    )
}

export default Swiggy;