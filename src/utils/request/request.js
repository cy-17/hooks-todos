import React from 'react'
import { useTranslation } from 'react-i18next';

export const DelayPromise = (seconds) => {
  const { t } = useTranslation();
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) resolve("请求成功");
        else reject("请求失败，请重试");
      }, seconds * 1000);
    });
};