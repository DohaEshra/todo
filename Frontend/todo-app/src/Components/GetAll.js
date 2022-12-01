import React from 'react';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import qs from 'qs';


function GetAll({userID}) {
    const [Todos, setTodos]=useState([]);
    useEffect(() => {

        axios.get("http://localhost:8080/Todo/"+userID)
          .then((data) => {
            console.log(data.data.data)
            setTodos(data.data.data)
          })
          .catch(error => console.log(error))
    
      }, [userID])

      const DeleteTodo = (id, user) => {
        axios.delete ("http://localhost:8080/Todo/"+id,{
          params:{
            User:user
          }
        })
            .then(data => {
                console.log("delete", data.data.data)
            }).catch(error => console.log(error))
            Todos.filter(a=>a._id===id && a.User===user).pop()
        }
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
                {/* <button className='btn btn-primary'onClick={() => >Update</button> */}
                <button className='btn btn-danger'onClick={() => DeleteTodo(todo._id, todo.User)}>Delete</button>
            </td>
        </tr>
    ))}
    </tbody>
    
</table>
  )
}

export default GetAll
