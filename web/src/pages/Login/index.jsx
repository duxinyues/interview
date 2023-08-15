/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 00:43:20
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-15 09:07:41
 * @FilePath: /web/src/pages/Login/index.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */

/**
 * 登录页
 */
import React, { useRef, useState } from "react";
import Form from "@/components/Form/Form";
import Input from "@/components/Form/Input";
import FormItem from "@/components/Form/FormItem";
import "./index.scss"

function Login() {
  const form = useRef(null);
  const [tips, setTips] = useState(null)
  /* 表单提交 */
  const submit = () => {
    form.current.submitForm((formValue) => {
      console.log(formValue)
      if (!formValue.userName) {
        return setTips("请输入用户名");
      }

      if (!formValue.password) {
        return setTips("请输入密码")
      }

      setTips(null)
    })
  }
  /* 重置表单 */
  const reset = () => {
    form.current.resetForm();
    setTips(null)
  }
  return <div className="login-content">
    <h3>欢迎登录</h3>
    <Form ref={form}>
      <FormItem name="userName" label="用户名">
        <Input />
      </FormItem>
      <FormItem name="password" label="密码">
        <Input />
      </FormItem>
    </Form>
    <div className="form-btn">
      <button className="searchbtn" onClick={submit} >提交</button>
      <button className="concellbtn" onClick={reset} >重置</button>
    </div>
    <p className="tips">{tips}</p>
  </div>
}

export default Login;