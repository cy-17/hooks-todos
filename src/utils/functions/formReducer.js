import {v4 as uuidv4} from 'uuid'
import { openNotification } from './openNotification';
import {setData} from '../functions/localStorage'
import i18n from '../../i18n.ts'

export function todoReducer(state,action){
    const [title,date]=action.payload || ''

    switch(action.type){
        case 'ADD_TODO':
            openNotification('bottomLeft',i18n.t("added"))
            const todo={title,date,key:uuidv4(),completed:'false'}
            state.push(todo)
            setData(state)
            break
        case 'COMPLETE_TODO':
            
            const todoComplete=state.filter(todo=>todo.key===action.payload)[0]
            if(todoComplete && todoComplete.completed==='false'){
                todoComplete.completed='true'
                openNotification('bottomLeft',i18n.t("done"))
            }else{
                todoComplete.completed='false'
                openNotification('bottomLeft',i18n.t("undone"))
            }
            setData(state)
            break
        case 'DELETE_TODO':
            openNotification('bottomLeft',i18n.t("deleted"))
            const newState= state.filter(todo=>todo.key!==action.payload)
            setData(newState)
            return newState
        default:
            openNotification('bottomLeft',i18n.t("error"))
            throw new Error()
    }
}