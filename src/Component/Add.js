import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {addTask} from "../Redux/Actions"
import {useDispatch} from "react-redux"

function Add() {
    const dispatch=useDispatch()
    const[Task,setTask]=useState({id: "",text:'',done:false})
    const handleChange=(e)=>{
        setTask({...Task,id: Math.floor(Math.random()*10000),text:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addTask(Task));
        setTask({id: "",text:'',done:false})
    }
    return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>tasks</Form.Label>
        <Form.Control type="text" placeholder="Enter task" onChange={handleChange} value={Task.text} />
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    )
}

export default Add