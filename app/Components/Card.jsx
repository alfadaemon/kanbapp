import React, {Component} from 'react'
import TaskList from './TaskList.jsx'

class Card extends Component {
    render(){
        return (
            <div className='card'>
                <div className="card_title">
                    <h2>{this.props.title}</h2>
                </div>
                <div className="card_details">
                    <h3>{this.props.description}</h3>
                    <TaskList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            </div>
        )
    }
}

export default Card