import React from 'react'
import {useState} from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue, handleKeyDown } = props
    

  return (
    <header>
        <input onKeyDown={handleKeyDown} value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }}  placeholder="What needs to be done?" />
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')
        }} >Add</button>
    </header>

  )
}
