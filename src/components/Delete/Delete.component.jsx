import { Popconfirm, Button } from "antd";
import React, { useContext } from "react";
import { TodoContext } from "../../App";
import { useTranslation } from 'react-i18next';

export const Delete = ({ record }) => {
  const { t } = useTranslation();
  const [, dispatchTodos] = useContext(TodoContext);

  return (
    <Popconfirm
      title={t("confirmDelete")}
      onConfirm={() => {
        dispatchTodos({ type: "DELETE_TODO", payload: record.key });
      }}
    >
      <Button type="primary" danger size="small" className="deleteBtn">
        {t("delete")}
      </Button>
    </Popconfirm>
  );
};
