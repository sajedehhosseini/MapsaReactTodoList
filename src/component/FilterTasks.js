import React from 'react'
import ShowTask from './ShowTask'

export default function FilterTasks(props) {
    let newTodoList=[];
    if (props.data.showlist == 'All') newTodoList=props.data.tasks;
    else if(props.data.showlist == 'Done') newTodoList=props.data.tasks.filter(todo=> todo.done)
    else newTodoList = props.data.tasks.filter(todo => !todo.done);
    return (
        <>
            {
                newTodoList.map((todo,index)=>
         
                    <ShowTask
                    key={index}
                    todo={todo}
                    handledone={()=>props.handledoneindex(todo.id)}
                    handleupdate={(e)=>props.handleupdateindex(e,todo.id)}
                    handleedit={()=>props.handleeditindex(todo.id)}
                    handledel={()=>props.handledelindex(todo.id)}
                    />
    
                )
            }
            </>
    )
}
