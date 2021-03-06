import React from "react";
import moment from "moment";
import { Col, DatePicker } from "antd";
import { useTranslation } from 'react-i18next';

export const Calendar = ({ setDate, date }) => {
  // const [dateVal,setdateVal]=useState()

  // useImperativeHandle(dateRef, () => ({
  //   // changeVal 就是暴露给父组件的方法
  //   changeVal: (newVal) => {
  //     setdateVal(newVal.valueOf());
  //     console.log(newVal.valueOf());
  //   }
  // }))

  // const getdateVal = (val) => {
  //   setDate(val.valueOf());
  //   // setdateVal(val)
  //   // console.log(val.valueOf());
  // };
  const { t } = useTranslation();

  const momentDate = date ? moment(date) : undefined;

  return (
    <Col>
      {/* <Form.Item label="选择日期" name="选择日期"> */}
      <DatePicker
        onChange={(moment) => setDate(moment.valueOf())}
        value={momentDate}
        placeholder={t("selectDate")}
        className="btnMargin"
      />
      {/* </Form.Item> */}
      {/* <span>{momentDate?.format("YYYY/MM/DD")}</span> */}
    </Col>
  );
};
