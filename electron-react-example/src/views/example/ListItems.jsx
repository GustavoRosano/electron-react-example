import React from 'react'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'

const ListItems = ({ onChange, onDelete, value }) => {
    return (
        <div className="Container-item">
            <Input value={value} onChange={onChange} className="Field-item" readonly />
            <Button onClick={onDelete}>Deletar</Button>
        </div>
    )
}

export default ListItems;