import React, {Component} from 'react'

class TaskList extends Component{
    render(){
        var tasks = this.props.tasks.map(
            (task) =>{
            return(
                <li className='checklist_task'>
                    <input type="checkbox" defaultChecked={task.done} />
                    {task.name}
                    <a href="#" className="checklist__task--remove" />
                </li>
            )
        })
        return(
            <div className='tasks'>
                <ul>{tasks}</ul>
            </div>
        )
    }
}

export default TaskList