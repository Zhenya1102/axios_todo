import React, {useEffect, useState} from 'react'
import {todolistApi} from '../api/todolist-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = todolistApi.get()
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