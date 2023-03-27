import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ListTasks} from './ListTasks';

function App() {
  const [task,setTask]=useState([]);
  const [newtask,setnewtask]=useState('');
  

  const handleTask=(event)=>{
    
    setnewtask(event.target.value);
  }

  const AddTask=(event)=>{
    const taskobj={
      taskid : task.length===0 ? 1 : task[task.length - 1 ].taskid+1,
      taskName : newtask,
      status: false,
    };
    setTask([...task,taskobj]);
    console.log({task});
  }

const handleUpdate=(taskid)=>{
  setTask(task.map((element)=> {
  if(element.taskid===taskid) return {...element,status: true};
  else  return element;
  }
  ));
}
const handleDelete=(taskid)=>{
  setTask(task.filter((element)=>element.taskid!=taskid));

}


  return (
    <div className="App">

      <ListTasks task={task} handleTask={handleTask} AddTask={AddTask} handleDelete={handleDelete} handleUpdate={handleUpdate} />
     
    </div>
  )
}

export default App;
