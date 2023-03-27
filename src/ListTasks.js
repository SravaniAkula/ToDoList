

export  function ListTasks(props){

    return(
        <div>
        <input type="text" onChange={props.handleTask} />
        <button onClick={props.AddTask} > ADD TASK </button>
        <div>
        {props.task.map((element) => {
            
          return( 
            <div style={{backgroundColor:element.status ? "green" : "white"}}>
         
          <h1>{element.taskName}</h1>
          <button  onClick={()=> props.handleUpdate(element.taskid)}> Update </button> 
          <button onClick={()=>props.handleDelete(element.taskid)}> Delete </button>
          </div>
          );
        }
      )}
      </div>
    
    </div>
    );
}


