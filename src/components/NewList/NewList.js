import React, {useState} from 'react'
import List from '../List/List'

function NewList(){
    let [newList, setNewList] = useState([])
    let [newListName, setNewListName] = useState("Give your new list a name")

    function createNewListName(event){
        setNewListName(event.target.value)
    }
    function addNewList(event){
        event.preventDefault()
        setNewList(newList => [...newList, {listName: newListName}])
    }
    return(
        <div>
            
            <div className="createListForm">
                <form>
                    <label>List name</label><br></br>
                    <input type="text" value={newListName} onChange={createNewListName} /><br></br>
                    <input type="submit" value="Create new list" className="createListBtn" onClick={addNewList}/>
                </form>
            <List addedList={newList}/>
            </div>
        </div>

    )
}

export default NewList