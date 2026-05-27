import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function Todo() {
    let [taskList, setTaskList] = useState([{task: "Sample Task", id: uuidv4(), is_done: false}]);
    let [addTodo, setAddTodo] = useState("");

    let addTask = () => {
        setTaskList((prevVal) => {
            return [...prevVal, {task: addTodo, id: uuidv4(), is_done: false}]
        });
        setAddTodo("");
    }

    let addText = (event) => {
        setAddTodo(event.target.value);
    }

    let removeTask = (id) => {
        setTaskList((prevVal) => prevVal.filter((task) => task.id != id));
    }

    let upperCase = () => {
        setTaskList((prevVal) => 
            prevVal.map((todo) => {
                return {...todo, task: todo.task.toUpperCase()}
            })
        );
    }

    let doneTask = (id) => {
        setTaskList((prevVal) => 
            prevVal.map((todo) => {
                if(todo.id == id)
                    return {...todo, is_done: true}
                return todo;
            })
        );
    }

    return (
        <div>
            <input type="text" placeholder="Add Task" value={addTodo} onChange={addText} />
            <button onClick={addTask}>Add Task</button>
            <br></br><br></br>
            <div>
                <b><u>Task List</u></b>
                <ul>
                    {
                    taskList.map((task) => {
                        return <li key={task.id} style={{textDecoration: task.is_done ? "line-through" : "none"}}><span>{task.task}</span><button onClick={() => removeTask(task.id)}>Delete</button><button onClick={() => doneTask(task.id)}>Done</button></li>
                    })
                    }
                </ul>
                <button onClick={upperCase}>UpperCase</button>
            </div>
        </div>
    )
}