import React from 'react';
import { Table } from "antd";
import 'antd/dist/antd.css';
import data from "./data.json"
import { StarFilled } from '@ant-design/icons';
import moment from "moment"
const formatDate = (date)=>{
  return moment(date).format('YYYY-MM-DD')
}
function List(props) {
  return <div>
    <Table
      columns={[
        {
          title: '',
          dataIndex: 'projectStatus',
          render: () => <div className='star'><StarFilled /></div>
        },
        {
          title: '所属品类',
          dataIndex: 'productCategory',
        },
        {
          title: '项目类别',
          dataIndex: 'prjCategory',
        },
        {
          title: '项目编号',
          dataIndex: '',
        },
        {
          title: '项目名称',
          dataIndex: 'prjName',
        },
        {
          title: '项目状态',
          dataIndex: 'projectStatus',
          render:(_,record)=>{
            return <div className='status'><span className={`${record.projectStatus} point`} /> {record.projectStatus === 'approving' ? '审批中' : '进行中'}</div>
          }
        },
        {
          title: '项目经理',
          dataIndex: 'prjManager',
        },
        {
          title: '所属部门',
          dataIndex: 'department',
        },
        {
          title: '项目计划时间',
          dataIndex: 'department',
          render:(_,record)=><span>{formatDate(record.prjStartDate)}~{formatDate(record.prjEndDate)}</span>
        },
      ]}
      dataSource={data}
      pagination={false}
    />
  </div>
}

export default List