import React, { createContext, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';
import { Table, Row, Col,Button } from 'antd';

import 'antd/dist/antd.css';
import './App.css'

import { AddTodoForm } from './components/Form/AddTodoForm.component';
import { todoReducer } from './utils/functions/formReducer';
import {getData} from './utils/functions/localStorage'
import { SetLang } from './components/Lang/ChangeLang.component';

import { FORM_COLUMNS } from './utils/constants/FORM_COLUMNS';
let skin=true
const handleSkin = (checked) => {
  if (checked) {
    // 明亮主题
    import('antd/dist/antd.css')
    import ('./App.css')
    skin=!skin
    console.log(skin);
  } else {
    // 暗色主题
    import('./assets/antd.dark.css')
    import ('./App.css')
    skin=!skin
    console.log(skin);
  }
}


export const TodoContext=createContext()

const App = () => {
  // 第一个参数: 一个 reducer 函数，  第二个参数: reducer的初始值， 第三个参数：可选参数，值为一个函数，可以用来惰性提供初始状态
  const [todos,dispatchTodos]=useImmerReducer(
    todoReducer,
    null,
    getData // 避免每次render都执行getData，初始值只渲染一次
  )

  // context 的值最好不要每次render 都改变，不然每个依赖该context的地方都会重新render
  // context 越少依赖越好，这里可以拆分成dispatch 和 todos 两个context
  // 如果两个值放在依赖 用useMemo 缓存
  const context = useMemo(() => [todos,dispatchTodos], [dispatchTodos, todos]);

  return(
    <TodoContext.Provider value={context}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <SetLang />
          <Button onClick={()=>{handleSkin(skin)}}>click</Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <AddTodoForm />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Table dataSource={todos} columns={FORM_COLUMNS} />
        </Col>
      </Row>
    </TodoContext.Provider>
  )
};

export default App;