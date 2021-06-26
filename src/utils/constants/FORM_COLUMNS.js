import React from 'react'
import { Title } from '../../components/Title/Title.component';
import { Complete } from '../../components/Complete/Complete.component';

// 每一列
export const FORM_COLUMNS=[
    // 第一列 title 标题
    {
        title:'任务',
        dataIndex:'title',
        key:'title',
        filters:[
            {
                text:'隐藏已完成',
                value:'hide'
            }
        ],
        onFilter: (_,record)=>record.completed==='false',
        render:(text,record)=>{
            return <Title record={record}>{text}</Title>
        }
    },
    // 第二列 date 日期
    {
        title:'计划完成日期',
        dataIndex:'date',
        key:'date',
        render:(text,record)=>{
            return <Title record={record}>{text}</Title>
        }
    },
    // 第三列 操作：设置已完成 或 删除
    {
        title:'设置',
        dataIndex:"action",
        key:"action",
        render:(_,record)=>{
            return(
                <>
                    <Complete record={record}/>
                </>
            )
        }
    }
]