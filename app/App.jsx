import React, { Component } from 'react';
import {render} from 'react-dom';

import KanbanBoard from './Components/KanbanBoard.jsx'

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: [
            {
                id: 4,
                name: 'Read Chapter 1',
                done: false
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
        status: "in-progress",
        tasks: [
            {
                id: 7,
                name: 'Read Chapter 1',
                done: false
            },
            {
                id: 8,
                name: 'Read Chapter 2',
                done: false
            }
        ]
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
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