import { useTranslation } from 'react-i18next';
import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Col, Form, Input} from "antd";
import { TagsOutlined } from "@ant-design/icons";

export const FormInput = forwardRef(({ setForm }, ref) => {
  const { t } = useTranslation();
  const [inputVal, setinputVal] = useState();

  useImperativeHandle(ref, () => ({
    // changeVal 就是暴露给父组件的方法
    changeVal: (newVal) => {
      setinputVal(newVal);
    },
  }));

  const getinputVal = (val) => {
    setForm(val);
    setinputVal(val);
  };


  return (
    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
      <Form.Item label={t("todoTitle")} name="title">
        <Input
          prefix={<TagsOutlined />}
          onChange={(e) => {
            getinputVal(e.target.value);
          }}
          value={inputVal}
          placeholder={t("titlePlaceholder")}
        />
        <span style={{ display: "none" }}>{inputVal}</span>
      </Form.Item>
    </Col>
  );
});
