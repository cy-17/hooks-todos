import React, { createContext, useMemo } from 'react';
import { useImmerReducer } from 'use-immer';
import { Table, Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './App.css';

import { AddTodoForm } from './components/Form/AddTodoForm.component';
import { todoReducer } from './utils/functions/formReducer';
import {getData} from './utils/functions/localStorage'

import { FORM_COLUMNS } from './utils/constants/FORM_COLUMNS';

export const TodoContext=createContext()

// const getData=() => {
//   let data=JSON.parse(window.localStorage.getItem('FORM_INITIAL_STATE'))
//   return data===null?FORM_INITIAL_STATE:data
// }

const App = () => {
  const [todos,dispatchTodos]=useImmerReducer(
    todoReducer,
    null,
    getData // 避免每次render都执行getData
  )

  // context 的值最好不要每次render 都改变，不然每个依赖该context的地方都会重新render
  // context 越少依赖越好，这里可以拆分成dispatch 和 todos 两个context
  // 如果两个值放在依赖 用useMemo 缓存
  const context = useMemo(() => [todos,dispatchTodos], [dispatchTodos, todos]);

  return(
    <TodoContext.Provider value={context}>
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