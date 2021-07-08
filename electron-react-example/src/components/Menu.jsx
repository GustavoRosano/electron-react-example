import './Menu.css'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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

export default props => {

    const classes = useStyles();


    const [open, setOpen] = useState(true);
    const [Open, SetOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleeClick = () => {
        SetOpen(!Open);
    };


    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <List>
                            <ListItem button onClick={handleClick}>
                                <a>
                                    <ListItemText primary="Eletrônicos" />
                                </a>
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <a href="/consoles">
                                            <ListItemText primary="Consoles" />
                                        </a>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <a href="/computadores">
                                            <ListItemText primary="Computadores" />
                                        </a>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <a href="/celulares">
                                            <ListItemText primary="Celulares" />
                                        </a>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </li>
                    <li>
                        <List>
                            <ListItem button onClick={handleeClick}>
                                <a>
                                    <ListItemText primary="Listas" />
                                </a>
                                {Open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse in={Open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <a href="/lista">
                                            <ListItemText primary="Lista de Tarefas" />
                                        </a>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <Collapse in={Open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <a href="/lista-simples">
                                            <ListItemText primary="Lista Simples" />
                                        </a>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <Collapse in={Open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <a href="/lista-aninhada">
                                            <ListItemText primary="Lista Aninhada" />
                                        </a>
                                    </ListItem>
                                </List>
                            </Collapse>
                            <Collapse in={Open} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItem button className={classes.nested}>
                                        <a href="/lista-pastas">
                                            <ListItemText primary="Lista de Pastas" />
                                        </a>
                                    </ListItem>
                                </List>
                            </Collapse>
                        </List>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}