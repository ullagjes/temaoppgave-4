import React, {useState} from 'react'

function Task(props){
    
    return(
        <div key={props.name}>
            <h3>Til {props.name}</h3> 
            <h3>skal vi kjøpe {props.gift},</h3> 
            <h3>som koster {props.price} kroner</h3>
           
        </div>
    )
}

export default Task