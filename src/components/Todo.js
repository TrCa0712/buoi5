import React from 'react';

const Todo = (props) => {
    const {todo, removeById}= props;
    return (
        <div className='todo'>
            <span> {todo.name} </span>
            <button onClick={()=>removeById(todo.id)} ><i class="fa-solid fa-xmark"></i></button>
        </div>
    );
}

export default Todo;
