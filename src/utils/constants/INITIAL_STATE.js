// 列表的初始化数据
import {v4 as uuidv4} from 'uuid'

export const FORM_INITIAL_STATE=[
    {
        key:uuidv4(),
        title:'todolist',
        date:new Date().toISOString().slice(0,10),
        completed:'false',
        dataIndex:0
    }
]