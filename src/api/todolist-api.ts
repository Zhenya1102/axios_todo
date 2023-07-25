import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

export const todolistApi = {
    get() {
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
