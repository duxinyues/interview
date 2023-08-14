/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 02:22:57
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-15 02:59:19
 * @FilePath: /web/src/components/Form/Form.jsx
 * @Description: 封装表单
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import React, { useImperativeHandle, useState } from "react";

const Form = React.forwardRef((props, ref) => {
    const [formData, setFormData] = useState({});

    const submitForm = (cb) => {
        cb(formData)
    };

    const resetForm = () => {
        let formDataTemp = { ...formData };
        Object.keys(formDataTemp).forEach(item => {
            formDataTemp[item] = ''
        });

        setFormData(formDataTemp)
    };


    const setValue = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    };

    useImperativeHandle(ref, () => ({ submitForm, resetForm }));

    const { children } = props;
    const renderChildren = [];

    React.Children.forEach(children, child => {
        if (child.type.displayName === 'formItem') {
            const { name } = child.props;
            const Children = React.cloneElement(child, {
                key: name,
                handleChange: setValue,
                value: formData[name] || ""
            }, child.props.children);

            renderChildren.push(Children)
        }
    });

    return renderChildren
})


Form.displayName = "form";


export default Form