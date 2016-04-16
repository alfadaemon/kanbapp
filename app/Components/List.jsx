import React, {Component} from 'react'
import Card from './Card.jsx'

class List extends Component {
    render(){
        var cards = this.props.cards.map(
            (card) => {
                return(
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        tasks={card.tasks}
                    />
                )
            }
        )

        return(
            <div className="list">
                {this.props.title}
                {cards}
            </div>
        )
    }
}

export default List