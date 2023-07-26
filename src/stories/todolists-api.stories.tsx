import React, {useEffect, useState} from 'react'
import {taskApi, todolistApi} from '../api/todolist-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = todolistApi.getTodo()
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'IT-INCUBATOR'
    useEffect(() => {
        const promise = todolistApi.addTodo(title)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '4cfd0f6c-6b80-4e77-98d4-ea634358b2f2'
    useEffect(() => {
         const promise = todolistApi.deleteTodo(todolistId)
        promise.then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '45a5a176-344f-40ac-a29c-68bbee0757a3'
    const title = 'JS'
    useEffect(() => {
        const promise = todolistApi.updateTodo(todolistId,title)
            promise.then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '36d9e1cc-a264-42a4-b517-4f0c7d3d2811'
    useEffect(() => {
        const promise = taskApi.getTask(todolistId)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '36d9e1cc-a264-42a4-b517-4f0c7d3d2811'
    const title = 'HTML'
    useEffect(() => {
        const promise = taskApi.addTask(todolistId,title)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '36d9e1cc-a264-42a4-b517-4f0c7d3d2811'
    const taskId = '2ff4eca1-6474-4c5c-a45b-ee9cb2b9269f'
    useEffect(() => {
        const promise = taskApi.deleteTask(todolistId, taskId)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '36d9e1cc-a264-42a4-b517-4f0c7d3d2811'
    const taskId = 'f3616e37-0e58-48a1-846e-42d344bb692a'
    const title = 'CSS'
    useEffect(() => {
        const promise = taskApi.updateTask(todolistId,taskId, title)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}