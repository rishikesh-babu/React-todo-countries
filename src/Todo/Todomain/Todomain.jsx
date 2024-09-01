import React, { useState } from "react";
import Todoinput from "../Todoinput/Todoinput";
import Todolist from "../Todolist/Todolist";
import './Todomain.css'

function Todomain() {

    const [todoinput, setTodoinput] = useState([])
    const [todolist, setTodolist] = useState([])

    function handleInput(event) {
        setTodoinput(event.target.value)
    }
    function handleAdd() {
        console.log('Add')
        setTodolist([...todolist, { label: todoinput, done: false }])
        console.log(todolist)
        setTodoinput('')
    }
    function handleDelete(index) {
        const temp = [...todolist]
        temp.splice(index, 1)
        setTodolist(temp)
        console.log(todolist)
    }
    function handleDone(index) {
        const temp = [...todolist]
        temp[index].done = true
        setTodolist(temp)
        console.log(...todolist)
    }

    return (
        <div className="todomain">
            <Todoinput todoinput={todoinput} handleInput={handleInput} handleAdd={handleAdd} />
            <div className="todolist-container">
                {
                    todolist.map((element, index) => <Todolist handleDone={handleDone} handleDelete={handleDelete} item={element} index={index} key={index} />)
                }
            </div>

        </div>
    )
}

export default Todomain