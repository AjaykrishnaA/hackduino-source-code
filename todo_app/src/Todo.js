import React from 'react';
import './Todo.css';
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { List, ListItem, ListItemText } from '@material-ui/core';

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.todo.text} secondary='Important' />
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </ListItem>
        </List>
    )
}

export default Todo
