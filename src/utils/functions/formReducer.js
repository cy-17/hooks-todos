import {v4 as uuidv4} from 'uuid'
import { openNotification } from './openNotification';
import {setData} from '../functions/localStorage'

export function todoReducer(state,action){
    const [title,date]=action.payload || ''

    switch(action.type){
        case 'ADD_TODO':
            openNotification('bottomLeft','已添加')
            const todo={title,date,key:uuidv4(),completed:'false'}
            state.push(todo)
            setData(state)
            break
        case 'COMPLETE_TODO':
            openNotification('bottomLeft','已完成')
            const todoComplete=state.filter(todo=>todo.key===action.payload)[0]
            if(todoComplete && todoComplete.completed==='false') todoComplete.completed='true'
            else todoComplete.completed='false'
            setData(state)
            break
        case 'DELETE_TODO':
            openNotification('bottomLeft','已删除')
            const newState= state.filter(todo=>todo.key!==action.payload)
            setData(newState)
            return newState
        default:
            openNotification('bottomLeft','出现错误')
            throw new Error()
    }
}