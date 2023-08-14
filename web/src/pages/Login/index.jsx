/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 00:43:20
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-15 03:02:02
 * @FilePath: /web/src/pages/Login/index.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
/**
 * 登录页
 */
import React, { useRef } from "react";
import Form from "@/components/Form/Form";
import Input from "@/components/Form/Input";
import FormItem from "@/components/Form/FormItem";
import "./index.scss"

function Login() {
  const form = useRef(null);
  /* 表单提交 */
  const submit = () => {
    form.current.submitForm((formValue) => {
      console.log(formValue)
      if(!formValue.userName){
       return alert("请输入用户名")
      }

      if(!formValue.password){
        return alert("请输入密码")
       }
    })
  }
  /* 重置表单 */
  const reset = () => {
    form.current.resetForm()
  }
  return <div className="login-content">
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

  </div>
}

export default Login;