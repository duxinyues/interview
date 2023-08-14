/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 00:33:56
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-15 02:14:52
 * @FilePath: /web/src/App.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter} from "react-router-dom";
import Router from "./router"

function App() {
  
  return (<BrowserRouter>
    <Router />
  </BrowserRouter>)
}

export default App
