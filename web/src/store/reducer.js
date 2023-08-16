/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-16 01:07:22
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-16 01:07:24
 * @FilePath: /web/src/store/reducer.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import { combineReducers } from "redux";
import userInfoReducer from "./redux/user"

const reducers = combineReducers({
    userInfo: userInfoReducer,
});

export default reducers