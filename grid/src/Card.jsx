import React from 'react';
import data from "./data.json"
import headImg from './image.jpg';
import { StarFilled } from '@ant-design/icons';
import moment from "moment"
const formatDate = (date)=>{
  return moment(date).format('YYYY-MM-DD')
}
function Card() {
  return <div className='card'>
    {data.map((item) => <div className='item'>
      <div className='head'><img src={headImg} /></div>
      <div className='info'>
        <div className='prjName'>{item.prjName}</div>
        <div className='prjManager'>项目经理：{item.prjManager}</div>
        <div className='prjStartDate'>立项日期：{formatDate(item.prjStartDate)}</div>
        <div>任务：{item.taskCount} 完成：{item.taskDoneCount} 进行：{item.taskDoingCount}</div>
      </div>
      <div className='option'>
          <div className='status'><span className={`${item.projectStatus} point`} /> {item.projectStatus === 'approving' ? '审批中' : '进行中'}</div>
          <div className='star'><StarFilled /></div>
      </div>
    </div>)}
  </div>
}

export default Card