import React, {useState} from 'react'
import List from '../List/List'
import NewList from '../NewList/NewList'

function Input(){
    let [name, setName] = useState("Navn")
    let [gift, setGift] = useState("Gave")
    let [price, setPrice] = useState(0)
    let [taskList, setTaskList] = useState([])
    let taskListCopy = [...taskList]
    let [showInput, setShowInput] = useState(true)
    let [formClassVisibility, setFormClassVisibility] = useState('formStyleHidden')

    function showInputComponent(){
        setFormClassVisibility('formStyleVisible')
        setShowInput(!showInput)
        if(showInput === false){
            setFormClassVisibility('formStyleHidden')
        } else {
            setFormClassVisibility('formStyleVisible')
        }

    }

    function changeNameHandler(event){
        setName(event.target.value)
    }

    function changePriceHandler(event){
        setPrice(event.target.value)
    }

    function changeGiftHandler(event){
        setGift(event.target.value)
    }

    function addTaskHandler(event){
        event.preventDefault()
        setTaskList(taskList => [...taskList, {name: name, gift: gift, price: price}])
        setName("Navn")
        setPrice(0)
        setGift("Gave")
    }

    function removeTask(index){
        taskListCopy.splice(index,1)
        setTaskList(taskListCopy)
    }

    return(
        <main>
            <input type="submit" value="+" className="showInputFormBtn" onClick={showInputComponent}/> 
            
            <NewList />

            <section className="container">
                <div>
                

                
                
                
                
            </div>     
                
            <div className="inputStyle">
                    <form className={formClassVisibility}>
                        <h2>Legg til påminner her</h2>
                        <label>Hvem skal du kjøpe gave til?</label>
                        <input type="text" value={name} onChange={changeNameHandler}/><br></br>
                        <label>Hva skal du kjøpe?</label>
                        <input type="text" value={gift} onChange={changeGiftHandler} /><br></br>
                        <label>Hvor mye skal gaven koste?</label>
                        <input type="number" value={price} onChange={changePriceHandler}/><br></br>
                        <input type="submit" value="Legg til" onClick={addTaskHandler}/>
                    </form>
            </div></section>
            
            
             
           
            
            
            
            
            
            
        
        </main>
       

    )
    
    
}


export default Input;

/*<List taskListCopy = {taskList} handler={removeTask}> 
                
                </List>  */

/*<div>
                {taskList.map((myTask) => {
                    return <div>
                     <Task
                    key={myTask.name}
                    name={myTask.name}
                    gift={myTask.gift}
                    price={myTask.price}
                    />
                    <input type="checkbox"></input>
                    </div>
                })}
            </div>*/