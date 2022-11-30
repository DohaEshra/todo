import React from 'react';
import { useEffect, useState } from 'react'; 
import axios from 'axios';


function GetAll({userID}) {
    const [Todos, setTodos]=useState([]);
    useEffect(() => {

        axios.get("http://localhost:8080/Todo/"+{userID})
          .then((data) => {
            console.log(data.data.data)
            setTodos(data.data.data)
          })
          .catch(error => console.log(error))
    
      }, [])

    //   const DeleteTodo = (id, user) => {
    //     axios.delete ("http://localhost:8080/Todo", { Task: t, User:u })
    //         .then(data => {
    //             console.log("Task", data.data.data)
    //         }).catch(error => console.log(error))
    
    //     }
  return (
    
<table className="table">
  <thead className="thead-dark">
    <tr>
      <th>#</th>
      <th>User</th>
      <th>Task</th>
      <th>Operations</th>
    </tr>
  </thead>
  <tbody>
    {Todos.map((todo, index) => (
            <tr key={index}>
            <th scope="row">{todo._id}</th>
            <td>{todo.User}</td>
            <td>{todo.Task}</td>
            <td>
                {/* <button className='btn btn-primary'onClick={() => answerClicked(question.id, choice)}>Update</button> */}
                {/* <button className='btn btn-primary'onClick={() => answerClicked(question.id, choice)}>Delete</button> */}
            </td>
        </tr>
    ))}
    </tbody>
    
</table>
  )
}

export default GetAll
