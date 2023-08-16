/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-16 01:45:34
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-16 02:43:19
 * @FilePath: /web/src/pages/MiniProgram/index.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import "./index.scss"

function MiniProgram() {
    const [page, setPage] = useState(0)
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userInfo = useSelector((data) => {
        console.log(data.userInfo)
        return data.userInfo
    })

    const nextPage = () => {
        if (page === userInfo?.data.length - 1) {
            return alert("已经是最后一个卡片了")
        }
        setPage((page) => {
            const pages = page + 1;
            return pages;
        })
    }
    const prePage = () => {
        if (page === 0) {
            return alert("已经是第一个卡片了")
        }
        setPage((page) => {
            const pages = page - 1;
            return pages;
        })
    }

    useEffect(() => {

        if (!userInfo.userName) {
            console.log("userInfo", userInfo);
            navigate('/login')
        }
    }, [])

    const deleteData = (page) => {
        const data = userInfo.data.filter(item => item != page)
        dispatch({
            type: "CHANGE_USER_INFO",
            payload: {
                ...userInfo,
                data
            }
        })
    }
    const renderCard = () => {
        if (edit) return <div className="mini-card">编辑{userInfo.data[page]}
            <span className="pre" onClick={() => prePage()}>上一张</span>
            <span className="next" onClick={() => nextPage()}>上一张</span>
        </div>
        return <div className="mini-card">{userInfo.data[page]}
            <span className="pre" onClick={() => prePage()}>上一张</span>
            <span className="next" onClick={() => nextPage()}>上一张</span>
        </div>
    }

    return <div className="miniProgram">
        {
            userInfo?.data?.length > 0 && renderCard()
        }

        {
            userInfo?.auth && <div className="btn">
                <button onClick={() => {
                    deleteData(page)
                }}>删除</button>
                <button onClick={() => {
                    setEdit(true)
                }}>编辑</button>
            </div>
        }
    </div>
}

export default MiniProgram