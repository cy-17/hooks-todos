import {v4 as uuidv4} from 'uuid'
import { openNotification } from './openNotification';

export function todoReducer(state,action){
    const [title,date]=action.payload || ''

    switch(action.type){
        case 'ADD_TODO':
            openNotification('bottomLeft','已添加')
            state.push({title,date,key:uuidv4(),completed:'false'})
            break
        case 'COMPLETE_TODO':
            openNotification('bottomLeft','已完成')
            const todoComplete=state.filter(todo=>todo.key===action.payload)[0]
            if(todoComplete) todoComplete.completed='true'
            break
        case 'DELETE_TODO':
            openNotification('bottomLeft','已删除')
            return state.filter(todo=>todo.key!==action.payload)
        default:
            openNotification('bottomLeft','出现错误')
            throw new Error()
    }
}