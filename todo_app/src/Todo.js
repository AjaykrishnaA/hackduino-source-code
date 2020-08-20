import React, { useState } from 'react';
import './Todo.css';
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { List, ListItem, ListItemText, Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    const updateTodo = (event) => {
        db.collection('todos').doc(props.todo.id).set({text: input}, {merge: true});
        setOpen(false);
}
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.todo.text} secondary='Important' />
                <Modal
                open={open}
                onClose={e => setOpen(false)}
                >
                <div className={classes.paper} >
                    <h1>Edit the todo:</h1> 
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo} >Ok</Button>
                </div>
                </Modal>
                <button onClick={e => setOpen(true)} >Edit</button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
            </ListItem>
        </List>
    )
}

export default Todo
