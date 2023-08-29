import React, { useState } from 'react'
import { Input, Button, Container } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import toDo, { additem } from './toDo'
import Table from '../Table/Table'

function ToDoList() {

    const [input, setInput] = useState(``)


    const dispatch = useDispatch()

    const addToList = () => {
        if(!input?.trim()){
            alert("Enter text")
        }
        dispatch(additem({
            id: Date.now(),
            text: input,
            isCompleted : false
        }))
        setInput("")
    }
    return (
        <>
            <Container>
                <div className="todolist_wrapper">
                  <div className='mb-3'>
                  <Input
                        className='w-50 mb-2'
                        type='text'
                        value={input}
                        onChange={(e)=>{
                            setInput(e.target.value)
                        }}
                    />
                    <Button
                        color='primary'
                        onClick={addToList}

                    >Add
                    </Button>
                  </div>
                <Table/>

                </div>
            </Container>
        </>
    )
}

export default ToDoList