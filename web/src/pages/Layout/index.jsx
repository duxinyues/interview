/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 01:00:38
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-16 02:20:35
 * @FilePath: /web/src/pages/Layout/index.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
/**
 * 这是登录后的页面，一般作为整个应用的基座
 */
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
function Layout() {
    const navigate = useNavigate();
    const { userInfo } = useSelector((data) => {
        return { ...data }
    })
    useEffect(() => {
        console.log("deng",userInfo)
        if (!userInfo.userName) {
            navigate("/login")
        }
    }, [])
    return <div>这是登录后的页面</div>
}

export default Layout