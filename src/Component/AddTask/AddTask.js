
import { Form, Button } from "react-bootstrap"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {add} from "../../actions/actions"

import './AddTask.css'

const AddTask = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    
    const handleChange = (e) => {
        
        if (text) {
            dispatch(add({ id:Math.random(),text:text,isDone:false }));
            setText("");
          } 
        };


 
        return (
            <div>
                <Form className="add-task">
        <Form.Control
        type="text"
        placeholder="Enter task  ..."
        className="input-task"
        onChange={(e) => setText(e.target.value)}
        value={text}
        />
        <Button variant="light" onClick={handleChange} > Add </Button>
    </Form>
                
            </div>
        )
    }


export default AddTask