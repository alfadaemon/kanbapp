import React, {Component} from 'react'
import TaskList from './TaskList.jsx'

class Card extends Component {
    render(){
        return (
            <div className='card well'>
                <div className="card__title">
                    {this.props.title}
                </div>
                <div className="card__details">
                    {this.props.description}
                    <TaskList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            </div>
        )
    }
}

export default Card