import React, {Component} from 'react'

class TaskList extends Component{
    render(){
        var tasks = this.props.tasks.map(
            (task) =>{
            return(
                <li className='checklist__task' key={task.id}>
                    <input type="checkbox" defaultChecked={task.done} />
                    {task.name}
                    <a href="#" className="checklist__task--remove" />
                </li>
            )
        })
        return(
            <div className='tasks'>
                <ul>{tasks}</ul>
                <input type="text"
                       className="checklist--add-task"
                       placeholder="Type then hit Enter to add a task" />
            </div>
        )
    }
}

export default TaskList