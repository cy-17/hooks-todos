import React, { useState, useContext, useRef, useCallback } from "react";
import ReactDOM from 'react-dom'
import { Button, Form, Row, Typography } from "antd";
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n.ts'

import { FormInput } from "./FormInput.component";
import { Calendar } from "./Calendar.component";

import { TodoContext } from "../../App";
import { openNotification } from "../../utils/functions/openNotification";

const { Title } = Typography;

const delayPromise = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) resolve(i18n.t("reqSuccess"));
      else reject(i18n.t("reqError"));
    }, seconds * 1000);
  });
};

export const AddTodoForm = () => {
  const { t } = useTranslation();
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
            {t("add")}
          </Button>
        </Row>
      </Form>
    </>
  );
};
