import React from 'react'
import {useSelector} from 'react-redux'
import Task from '../Task/Task'
import {useState} from 'react'

function ListTask() {
    
    
    const [all, setAll] = useState(true)
   
    const listTasks = useSelector(state => state.listTasks)
    return (
        <div>
           
           <button onClick={()=>setAll(!all)}>{all?'ALL':'DONE'}</button>
    <div className="task">
      <ul>
          
        {all?listTasks.map(el=><Task task={el}/>):listTasks.filter(el=>el.isDone==true).map(el=><Task task={el}/>)}
         
      </ul>
    </div>
        </div>
    )
}

export default ListTask

