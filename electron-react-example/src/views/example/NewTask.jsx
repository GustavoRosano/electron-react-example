import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'

const NewTask = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState('')

    const setNewTask = (e) => {
        setNewItem(e.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        onSubmit(newItem)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <Input 
                    className="Todo-input"
                    onChange={setNewTask}
                    placeholder="Insira uma Tarefa"
                />
                <Button type="submit">Criar Tarefa</Button>
            </form>
        </div>
    )
}

export default NewTask