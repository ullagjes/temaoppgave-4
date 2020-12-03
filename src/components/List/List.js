import React, {useState, useEffect} from 'react'
import Task from '../Task/Task'
import Counter from '../Counter/Counter'

function List(props){
   
    return(
        <div></div>
    )
    
}

export default List

/*props.taskListCopy.map */

/*<div className="listStyle">
            <h2>Julegaver 2020</h2>
            <Counter count={props.taskListCopy.length} price={props.taskListCopy.price}/>    

            {props.taskListCopy.map((myTask, index) => {
                
                return <div> 
                    <div key={index} className="task-card">
                        
                        <Task 
                        name={myTask.name}
                        gift={myTask.gift}
                        price={myTask.price}
                        />
                        <label htmlFor="bought">Kjøpt</label>
                        <input type="checkbox" id="bought"></input>
                        <input type="submit" value="Slett fra listen" onClick={() => props.handler(index)} />
                        </div>
                    </div>
                })
            }
        </div> */