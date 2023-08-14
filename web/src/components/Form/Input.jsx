/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 02:38:52
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-15 02:41:08
 * @FilePath: /web/src/components/Form/Input.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */

import React from "react";

function Input(props){
    return <input value={props?.value} onChange={e=>props.onChange(e.target.value)}></input>
}

Input.displayName = 'input'

export default Input;