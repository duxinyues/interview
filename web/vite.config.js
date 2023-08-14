/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-15 00:33:56
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-15 00:52:17
 * @FilePath: /web/vite.config.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";

// 查找路径
const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir);
};
// 别名
const alias = {
  "@": pathResolve("src"),
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias,
  },
})
