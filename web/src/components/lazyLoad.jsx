/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 01:08:22
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-15 02:08:02
 * @FilePath: /web/src/components/lazyLoad.jsx
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
/**
 * 简单的高阶组件，主要用于加载子组件时，添加过度效果，比如loading
 */

import React, { Suspense } from "react";

export const lazyLoad = (Comp) => {
    return (
      <Suspense
        fallback={
          <div className="react-container">
            <div className="progress"></div>
          </div>
        }
      >
        <Comp />
      </Suspense>
    );
  };