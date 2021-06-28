import React, { createContext } from 'react';
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
    getData()
  )

  return(
    <TodoContext.Provider value={[todos,dispatchTodos]}>
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