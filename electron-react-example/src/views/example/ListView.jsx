import React, { useState } from 'react'
import ListItems from './ListItems'
import NewTask from './NewTask'

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

export default props => {
    const [tasks, setTasks] = useState([]);

    const addNewTask = (task) => {
        const itensCopy = Array.from(tasks);
        itensCopy.push({ id: tasks.length, value: task });
        setTasks(itensCopy);
    }

    const deleteTask = (index) => {
        const itensCopy = Array.from(tasks);
        itensCopy.splice(index, 1);
        setTasks(itensCopy);
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    const classes = useStyles();

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div>
                <h2>Lista de Tarefas</h2>
                <NewTask onSubmit={addNewTask} />
                {tasks.map(({ id, value }, index) => (
                    <ListItems
                        key={id}
                        value={value}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}