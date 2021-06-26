// 提示弹出框

import { notification } from 'antd';

export const openNotification=(placement,text)=>{
    notification.info({
        placement,
        message:`${text}`
    })
}