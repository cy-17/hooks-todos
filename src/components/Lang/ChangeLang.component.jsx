import React from "react";
import { useTranslation } from 'react-i18next';
import {Button} from 'antd'

export const SetLang=()=>{
    const { i18n } = useTranslation();
    const switchLang=() => {
        i18n.changeLanguage(i18n.language==="en_US"?"zh_CN":"en_US")
        // window.location.reload()
    }
    return (
        <Button size="small" onClick={switchLang}>{i18n.language==="en_US"?"切换为中文":"switch to English"}</Button>
    )
}

        
