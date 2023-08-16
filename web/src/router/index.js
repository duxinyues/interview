/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 00:48:20
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-16 01:47:13
 * @FilePath: /web/src/router/index.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import {lazyLoad}  from "../components/lazyLoad"

const rootRouter = [
    {
        path: "/",
        element:lazyLoad(lazy(() => import("../pages/Layout"))) ,
    },
    {
        path: "/login",
        element: lazyLoad(lazy(() => import("@/pages/Login"))),
    },
    {
        path: "/mini-program",
        element: lazyLoad(lazy(() => import("@/pages/MiniProgram"))),
    },
    {
        path: "*",
        element: lazyLoad(lazy(() => import("@/pages/NoMatch"))),
    },
];

const Router = () => {
    const routes = useRoutes(rootRouter);
    return routes;
};

export default Router;