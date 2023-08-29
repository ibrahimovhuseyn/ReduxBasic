import React from 'react'
import ToDoList from './Components/ToDoList/ToDoList'
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/Style/Style.scss'

function App() {
  return (
    <div className='container'>
 <h1 className='text-center'>To Do List</h1>     
      <ToDoList/>
    </div>
  )
}

export default App