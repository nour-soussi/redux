import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch } from "react-redux"
import {deleteTask} from "../Redux/Actions"
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import {updateTask} from "../Redux/Actions"
import Form from 'react-bootstrap/Form';
import{doneTask} from "./../Redux/Actions";


function CardTask({task}) {
const dispatch= useDispatch();
const handleDelete=()=>{
    dispatch(deleteTask(task.id,text))
}

const [show, setShow] = useState(false);
const[text,setText]= useState(" ")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


const handleUpdate=()=>{
    dispatch(updateTask(task.id, text))
    handleClose();
}

const handleDone=()=>{
    dispatch(doneTask(task.id))
}

    return (
        <>
        <Card style={{width: '18rem' }} >
        <Card.Body>
            <Card.Title style={task.done ? {textDecoration:"line-through"}:{textDecoration:"none"}}>{task.text}</Card.Title>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handleDone} />
        </Form.Group>
            <Button variant="primary" onClick={handleShow}>update task</Button>
            <Button variant="danger" onClick={handleDelete}>delete task</Button>
            </Card.Body>
        </Card>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body><input placeholder={task.text} onChange={(e)=> setText(e.target.value)}/></Modal.Body>
    <Modal.Footer>
    
    <Button variant="primary" onClick={handleUpdate}>
        Save Changes
    </Button>
    </Modal.Footer>
    </Modal>
        </>     
    )
}

export default CardTask