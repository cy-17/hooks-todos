// 列表的初始化数据
import {v4 as uuidv4} from 'uuid'

export const FORM_INITIAL_STATE=[
    {
        key:uuidv4(),
        title:'早睡早起',
        date:new Date().toISOString().slice(0,10),
        completed:'false',
        dataIndex:0
    },
    {
        key:uuidv4(),
        title:'daydayup',
        date:new Date().toISOString().slice(0,10),
        completed:'false',
        dataIndex:1
    },
    {
        key:uuidv4(),
        title:'今天要做啥',
        date:new Date().toISOString().slice(0,10),
        completed:'true',
        dataIndex:2
    },
]