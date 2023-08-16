/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 00:33:56
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-16 01:10:24
 * @FilePath: /web/src/App.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import './App.css'
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Provider } from "react-redux";
import { store } from './store/store';

function App() {

  return (<Provider store={store}><BrowserRouter>
    <Router />
  </BrowserRouter></Provider>)
}

export default App
