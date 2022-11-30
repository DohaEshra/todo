import axios from 'axios'
import React, { useState } from 'react'

function AddTodo() {
    const [Task, SetTask]= useState('');
    const [User, SetUser]= useState(0);

    const AddNewTodo = (u, t) => {
        console.log(u, t)
        axios.post("http://localhost:8080/Todo", { Task: t, User:u })
            .then(data => {
                console.log("Task", data.data.data)
            }).catch(error => console.log(error))
    
        }
  function callSetTask(event){
    SetTask(event.target.value)
    console.log(Task)
  }
  function callSetUser(event){
    
        SetUser(event.target.value)
    console.log(User)

  }
  return (
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputTask" className="form-label">Task</label>
    <input type="text" className="form-control" id="exampleInputTask" aria-describedby="emailHelp" onChange={callSetTask}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputUser" className="form-label">User</label>
    <input type="text" className="form-control" id="exampleInputUser" onChange={callSetUser}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={() => AddNewTodo(User, Task)}>Add</button>
</form>
  )
}

export default AddTodo
