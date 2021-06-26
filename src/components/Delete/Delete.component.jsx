import { Popconfirm,Button } from 'antd'
import React,{ useContext } from 'react'
import { TodoContext } from '../../App'

export const Delete=({record})=>{
    const [,dispatchTodos]=useContext(TodoContext)

    return(
        <Popconfirm
         title="确定删除此项吗？"
         onConfirm={()=>{dispatchTodos({type:'DELETE_TODO',payload:record.key})}}
        >
            <Button type="primary" danger>
                删除
            </Button>
        </Popconfirm>
    )
}