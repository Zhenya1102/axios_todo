import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

export const todolistApi = {
    getTodo() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    addTodo(title: string) {
        return instance.post<CreateResponseType<{ item: TodolistType }>>('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CreateResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodo(todolistId: string, title: string) {
        return instance.put<CreateResponseType>(`todo-lists/${todolistId}`, {title})
    }
}
type TodolistType = {
    addedDate: string
    id: string
    order: number
    title: string
}
type CreateResponseType<T = {}> = {
    data: T,
    fieldsErrors: string[],
    messages: string[],
    resultCode: number
}

export const taskApi = {
    getTask(todolistId:string) {
        return instance.get<TaskType>(`todo-lists/${todolistId}/tasks`)
    },
    addTask(todolistId:string,title:string) {
        return instance.post<CreateResponseTaskType<{ item: TaskType }>>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId:string) {
        return instance.delete<CreateResponseTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId:string ,title: string) {
        return instance.put<CreateResponseTaskType<{ item: TaskType }>>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}
type  TaskType = {
    items: TaskItem[]
    totalCount: number,
    error: null
}
type  TaskItem = {
    id: string,
    title: string,
    description: null,
    todoListId: string,
    order: number,
    status: number,
    priority: number,
    startDate: null,
    deadline: null,
    addedDate: string
}
type CreateResponseTaskType<T = {}>= {
    data: T
    fieldsErrors:string[]
    messages:string[]
    resultCode: number
}
// {"data":{},"messages":[],"fieldsErrors":[],"resultCode":0} - response для delete