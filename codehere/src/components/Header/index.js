import React, { useEffect, useState } from 'react'

function Header({ addContacts, contacts }) {
    const initialFormValues = { todoName: "", todoActive: true }
    const [todo, setTodo] = useState(initialFormValues)
   
    useEffect(() => {
        setTodo(initialFormValues)
    }, [])
    useEffect(() => {
        setTodo(initialFormValues)
    }, [contacts])

    const onChangeInput = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value, todoActive: true })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (todo.todoName === "") {
            return false;
        }
        console.log(todo)
        addContacts([...contacts, todo])
    }

    return (
        <header className='header'>

            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input
                    name='todoName'
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={todo.todoName}
                    autoFocus
                    onChange={onChangeInput} />
            </form>
        </header>)
}

export default Header
