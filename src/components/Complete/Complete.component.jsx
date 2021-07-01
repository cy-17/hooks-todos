import { useTranslation } from 'react-i18next';
import React, { useContext } from "react";
import { TodoContext } from "../../App";

import { Button } from "antd";

export const Complete = ({ record }) => {
  const { t } = useTranslation();
  const [, dispatchTodos] = useContext(TodoContext);
  const { completed } = record;
  return (
    <a
      href="#complete"
      onClick={() => {
        dispatchTodos({ type: "COMPLETE_TODO", payload: record.key });
      }}
    >
      <Button type={completed === "true" ? "default" : "primary"} size="small">
        {completed === "true" ? `${t("done")}` : `${t("undone")}`}
      </Button>
    </a>
  );
};
