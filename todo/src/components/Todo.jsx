import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineEdit,AiOutlineCheck} from "react-icons/ai"
import { useTodoLayerValue } from '../context/TodoContext'
import clsx from 'clsx'
import { upload } from '@testing-library/user-event/dist/upload'

const Todo = ({todo}) => {
const [{}, dispatch] = useTodoLayerValue()
const [editable, setEditable] = useState(false)
const [content, setContent] = useState(todo.content)

const removeTodo = todoId => {
dispatch({
    type: 'REMOVE_TODO',
    payload: todoId
})
}

const completeTodo = todoId => {
    dispatch({
        type: 'COMPLETE_TODO',
        payload: todoId
    })
    }

    const updateTodo = ({todoId, newValue}) => {
        dispatch({
            type: 'UPDATE_TODO',
            payload: {todoId, newValue}
        })
        }
        


const todoStyle =clsx({
    ["todo-row"]: true,
    ["completed"] : todo.isCompleted
})


    return (
        
        <div className={todoStyle}>
            <div onClick={() =>(editable ? '' : completeTodo(todo.id))}>
                
                {editable ?  (
                    <input 
                    className='todo-input-edit'
                     type="text" 
                     value={content}
                      onChange = {event => setContent (event.target.value)} />):(
                    todo.content
                )}
            </div>

            <div className='todo-icons'>
                <AiOutlineClose 
                className='todo-icon' 
                onClick={() => removeTodo(todo.id)}
                />
                { editable ? (
                <AiOutlineCheck 
                className='todo-icon' 
                onClick={() => {
                        updateTodo({
                            todoId: todo.id,
                            newValue: content
                        })
                        setContent('')
                        setEditable (false)
                    }}/>
                     ): (
                        <AiOutlineEdit className='todo-icon' onClick={() => setEditable(true)}/>
            
                    )
                }
               
            
            
            </div>

        </div>
      
    )
}

export default Todo
