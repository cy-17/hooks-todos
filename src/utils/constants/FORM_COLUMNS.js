import React from 'react'
import moment from 'moment'
import { Title } from '../../components/Title/Title.component';
import { Complete } from '../../components/Complete/Complete.component';
import { Delete } from '../../components/Delete/Delete.component';
import i18n from '../../i18n.ts'

// 每一列
export const FORM_COLUMNS=[
    // 第一列 title 标题
    {
        title:i18n.t("todoTitle"),
        dataIndex:'title',
        key:'title',
        filters:[
            {
                text:i18n.t("hideDone"),
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
        title:i18n.t("doneDate"),
        dataIndex:'date',
        key:'date',
        render:(text,record)=>{
            return <Title record={record}>{moment(text).format().slice(0,10)}</Title>
        }
    },
    // 第三列 操作：设置已完成 或 删除
    {
        title:i18n.t("settings"),
        dataIndex:"action",
        key:"action",
        render:(_,record)=>{
            return(
                <>
                    <Complete record={record}/>
                    <Delete record={record} />
                </>
            )
        }
    }
]