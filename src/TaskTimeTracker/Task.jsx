import { useRef, useState } from "react";
import { connect } from "react-redux";
const Task = ({ user,addnewTask,deletetask,updatetask}) => {

    let tname=useRef();
    let tid=useRef();
    let[update,isupdate]=useState(false);

    console.log(user);

    let add=()=>{
        if(user.some(x=>{return x.id==tid.current.value}))
        {
            alert('id is alerdy present')
        }
        else
        {
            let newtask={id:tid.current.value,
                tname:tname.current.value,
                addedOn:new Date().toLocaleString()
                } //prepare new task to add the table
                console.log(newtask);
                addnewTask(newtask) //indirectly call the dispatch function
        }
    }


    let edit=(task)=>{
        tid.current.value=task.id
        tname.current.value=task.tname
        isupdate(true)
    }

    let updatevalue=()=>{
        let valueupdate ={id:tid.current.value,tname:tname.current.value,addedOn:new Date().toLocaleString()}
        let previousvalue=[...user]
        let ind=previousvalue.findIndex((task) => { return task.id === tid.current.value })
        previousvalue.splice(ind, 1, valueupdate);
        console.log(previousvalue);
        updatetask(previousvalue)
    }

    return (
        <div className="task">
            <h1>TaskTimeTracker</h1>
            <fieldset>
                <legend>Add new task</legend>
                <input type="text" placeholder="Name" ref={tname}/>
                <input type="text" placeholder="ID" ref={tid}/>
                {update==false ? <button onClick={add}>add</button> :
                <button onClick={updatevalue}>update</button>}
            </fieldset>
            <table border="3px" align="center">
                <thead>
                    <th>Sl no</th>
                    <th>Name</th>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        user.map((task, ind) => {
                            return (
                                <div className="div">
                                    <tr>
                                    <td>{ind + 1}</td>
                                    <td>{task.tname}</td>
                                    <td>{task.id}</td>
                                    <td>{task.addedOn}</td>
                                    <td>
                                        <button onClick={()=>{edit(task)}}>Edit</button>
                                        <button onClick={()=>{deletetask(task.id)}}>delete</button>
                                    </td>
                                </tr>
                                </div>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
let mapStateToProps = (state) => {
    return { user: state.tasks };
}
let mapDispacthtoProps=(dispatch)=>
{
    return {
        addnewTask:(newtask)=>{dispatch({type:"add_new",payload:newtask})},
        deletetask:(id)=>{dispatch({type:"delete",payload:id})},
        updatetask:(previousvalue)=>{dispatch({type:"update",payload:previousvalue})}
    }
}
export default connect(mapStateToProps,mapDispacthtoProps)(Task);