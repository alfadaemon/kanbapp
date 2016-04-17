import React, { Component } from 'react'
import {render} from 'react-dom'
import marked from 'marked'

import KanbanBoard from './Components/KanbanBoard.jsx'

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the **whole** book",
        color: '#BD8D31',
        status: "in-progress",
        tasks: [
            {
                id: 4,
                name: 'Read Chapter 1',
                done: true
            },
            {
                id: 5,
                name: 'Read Chapter 2',
                done: false
            }
        ]
    },
    {
        id: 4,
        title: "Read the Book",
        description: "I should read the whole book",
        color: '#3A7E28',
        status: "in-progress",
        tasks: [
            {
                id: 7,
                name: 'Read Chapter 3',
                done: false
            },
            {
                id: 8,
                name: 'Read Chapter 4',
                done: false
            }
        ]
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book. The complete source can be found at" +
        " [github](https://github.com/pro-react)",
        color: '#3A7E28',
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            }
        ]
    },
    {
        id: 3,
        title: "Get the Book",
        description: "I should get the book from the internet?",
        color: '#BD8D31',
        status: "done",
        tasks: [
            {
                id: 6,
                name: 'Search the internet',
                done: true
            }
        ]
    }
]

render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));