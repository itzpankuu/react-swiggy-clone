import { useState } from "react";

function State(props){

    const [Count,ChangeCount] = useState(1);
    const [Select,Change] = useState(true);

    const inc = ()=>{
       ChangeCount(Count+1);  

    }

    const dec = ()=>{
        ChangeCount(Count-1);   
     }
 
     const toggle = () =>{
        Change(!Select);
     }




    return(
        <>
        <div className="container">
            <b>Price = {props.price}</b>
            <button onClick={toggle}> {Select==false ?  'Select' : 'Unselect'}</button>
            <button onClick={inc} disabled ={Count==props.limit?true:false}>+</button>
            <h1 style={{
                color: Count>5? "red": "green"}}>{Count}</h1>
            <button onClick={dec} disabled = {Count==1?true:false}>-</button>
            <b>ToTal = {Count*props.price}</b>
            <input checked={Select} type="checkbox" name="" id="check" />
        </div>
        
        
        
        
        
        
        </>
    )
}

export default State;