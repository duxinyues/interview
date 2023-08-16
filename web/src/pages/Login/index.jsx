/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 00:43:20
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-16 01:43:09
 * @FilePath: /web/src/pages/Login/index.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */

/**
 * 登录页
 */
import React, { useRef, useState } from "react";
import Input from "@/components/Form/Input";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import data from "./data.json"

function Login() {
  const dispatch = useDispatch();
  const [tips, setTips] = useState(null);
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null)
  /* 登录 */
  const submit = () => {
    if (!userName) {
      return setTips("请输入用户名");
    }

    /**
     * Tom：管理员，权限值为1
     * Mary：用户，权限值为0
     */
    /**
     * 登录成功后，返回对应的卡片数据
     */
    if (data[userName]) {
      dispatch({ type: "CHANGE_USER_INFO", payload: data[userName] });
      navigate("/mini-program");
      return
    }


    setTips("您登录的信息不存在哦！")
  }

  return <div>
    <div className="login-content">
      <h3>欢迎登录</h3>
      <Input onChange={(e) => {
        setUserName(e);
        setTips(null);
      }} />
      <div className="form-btn">
        <button className="searchbtn" onClick={submit} >登录</button>
      </div>
      <p className="tips">{tips}</p>
    </div>

    <p>韋永愿</p>
    <p>18690702574</p>
    <p>yongyuan253015@gmail.com</p>
  </div>
}

export default Login;