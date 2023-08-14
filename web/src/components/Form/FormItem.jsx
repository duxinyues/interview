/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 02:34:04
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-15 02:47:13
 * @FilePath: /web/src/components/Form/FormItem.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import React from "react";
import "./index.scss"

function FormItem(props) {
    const { handleChange, value, name, label, children } = props;
    const onChange = (val) => {
        handleChange(name, val)
    };

    return (<div className="form-item">
        <span>{label}:</span>
        {React.isValidElement(children) && children.type.displayName === 'input' ? React.cloneElement(children, { onChange, value }) : null}
    </div>)
}

FormItem.displayName = "formItem";

export default FormItem;