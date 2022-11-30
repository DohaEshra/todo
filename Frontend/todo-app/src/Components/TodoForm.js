import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GetAll from './GetAll';
import AddTodo from './AddTodo';


function TodoForm() {
    //useStates
    const [search, SetSearch]= useState(0);

    function getSearch(event){
        SetSearch(event.target.value)
    }
    return (
            <section className='quiz_box '>
                    <div className='que_text'>
                        <AddTodo/>
                        <input type={'search'} onChange={getSearch}/>
                        <GetAll userID={search}/>
                    </div>
                </section>
    //     <div className="container ">
    //     <div className='start_btn'>
    //     </div>
    //     <GetAll/>
    //       <div>
    //       </div> 
    
    //   </div>
  )
}

export default TodoForm
