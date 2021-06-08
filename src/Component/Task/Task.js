import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {deleteTask,doneTask} from '../../actions/actions'
import Edit from '../edit/Edit'






function Task({task}) {

    const dispatch = useDispatch()
    return (
        <div>
           <Card >
  <Card.Body>
    <Card.Title className={task.isDone?'done':null} >{task.text}</Card.Title>
   <Edit task={task}/>

   <Button variant="primary" onClick={() => dispatch(deleteTask(task.id))}>delete</Button>
    <Button className={task.isDone?'gdone':'rdone'} onClick={()=>dispatch(doneTask(task.id))}>{task.isDone?'done':'undone'}  </Button>
  </Card.Body>

</Card> 
        </div>
    )
}

export default Task
