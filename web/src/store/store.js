/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-08-16 01:03:13
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-08-16 01:11:22
 * @FilePath: /web/src/store/store.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from './reducer';
// redux持久化保存
const storageConfig = {
  key: "root",
  storage,
};
// 中间件
const middleware = [thunk];
const logger = createLogger()

// 开启redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = persistReducer(storageConfig, reducers);
// 创建store
export let store = legacy_createStore(configStore, composeEnhancers(
  applyMiddleware(...middleware,logger)
));
// 创建持久化的store
export let persistor = persistStore(store);