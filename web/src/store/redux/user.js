/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-16 01:03:24
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-16 02:42:18
 * @FilePath: /web/src/store/redux/user.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
const userState = {}
export default function changeUserInfo(state = {
    userState,
},
    action) {
    switch (action.type) {
        case "CHANGE_USER_INFO":
            return {
                ...action.payload,
            };
        default:
            return { ...state };
    }
}