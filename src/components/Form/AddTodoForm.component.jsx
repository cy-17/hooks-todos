import React, { useState, useContext, useRef, useCallback } from "react";
import ReactDOM from 'react-dom'
import { Button, Form, Row, Typography } from "antd";

import { FormInput } from "./FormInput.component";
import { Calendar } from "./Calendar.component";

import { TodoContext } from "../../App";
import { openNotification } from "../../utils/functions/openNotification";

const { Title } = Typography;
  const delayPromise = (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) resolve("请求成功");
        else reject("请求失败，请重试");
      }, seconds * 1000);
    });
  };
export const AddTodoForm = () => {
  const [form, setForm] = useState();
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(false);
  const [, dispatchTodos] = useContext(TodoContext);
  const inputRef = useRef();
  //   const dateRef = useRef();

  const entered = date && form ? true : false;



  const formSubmit = useCallback(() => {
    if (form && date && form.trim()) {
      setLoading(true);
      const p1 = delayPromise(0.5);
      const p2 = delayPromise(1);
      Promise.all([p1, p2])
        .then((res) => {
          ReactDOM.unstable_batchedUpdates(() => {
            dispatchTodos({ type: "ADD_TODO", payload: [form, date] });
            // changeVal就是子组件暴露给父组件的方法
            inputRef.current.changeVal("");
            setForm("");
            // dateRef.current.changeVal('')
            setDate(null);
            openNotification("bottomLeft", res);
            setLoading(false);
          })
        })
        .catch((err) => {
          openNotification("bottomLeft", err);
          setLoading(false);
        });
    } else {
      openNotification("bottomLeft", "请输入您的计划");
    }
  }, [date, dispatchTodos, form]);
  return (
    <>
      <Form onFinish={formSubmit}>
        <Title level={4}>TodoList</Title>
        <Row justify="center">
          <FormInput setForm={setForm} ref={inputRef} />
          <Calendar setDate={setDate} date={date} />
          <Button
            type="primary"
            htmlType="submit"
            disabled={!entered || loading}
            className="btnMargin"
            loading={loading}
          >
            点击添加
          </Button>
        </Row>
      </Form>
    </>
  );
};
