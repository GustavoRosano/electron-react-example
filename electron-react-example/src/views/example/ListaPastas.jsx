import React, { useState } from 'react'
import ListItems from './ListItems'
import NewTask from './NewTask'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

export default props => {
    const [tasks, setTasks] = useState([]);


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
            <h2>___________________________   ___________________________   ___________________________</h2>
            <h2>Lista de Pastas</h2>
            <div>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Work" secondary="Jan 7, 2014" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Vacation" secondary="July 20, 2014" />
                    </ListItem>
                </List>
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
        </div>
    )
}