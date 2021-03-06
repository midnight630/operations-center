import React, { useState, useEffect } from 'react'
import { RouteConfig } from 'react-router-config'
import { Card, Row, Col, Button, Table, Popover, Icon, Popconfirm } from 'antd'
import Fileds from './Fileds'

interface IProps extends RouteConfig {
  channelId: string
}
const Index = (props: IProps) => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    setData(1)
  }, [])

  console.log(props)

  const onSearch = (params: any) => {
    console.log(params)
  }

  const columns = [
    {
      title: '渠道名称',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => {
        return (
          <span>
            {text}
            <Popover content="这是运营备注">
              <Icon
                style={{ marginLeft: 5, color: '#ccc' }}
                type="info-circle"
              />
            </Popover>
          </span>
        )
      }
    },
    {
      title: '类型',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '注册媒体主',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '添加媒体数',
      key: 'tags',
      dataIndex: 'tags'
    },
    {
      title: '接单媒体数',
      key: 'add_num',
      dataIndex: 'add_num'
    },
    {
      title: '媒体主订单数',
      key: 'order_num',
      dataIndex: 'order_num'
    },
    {
      title: '媒体总消耗',
      key: 'total_num',
      dataIndex: 'total_num'
    },
    {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => (
        <span>
          <span className="table-operate" style={{ marginRight: 16 }}>
            查看链接
          </span>
          <span className="table-operate" style={{ marginRight: 16 }}>
            编辑
          </span>
          <Popconfirm title="确认删除该渠道？" okText="确认" cancelText="取消">
            <span className="table-operate">删除</span>
          </Popconfirm>
        </span>
      )
    }
  ]

  const tableData: any[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]

  return (
    <div>
      <Fileds callback={onSearch} />
      <Card bordered={false} className="content">
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: '20px' }}
        >
          <Col span={12}>
            <Button type="primary">添加渠道</Button>
          </Col>
          <Col span={12} className="operate-r">
            <Button>设置关注字段</Button>
          </Col>
        </Row>
        <Table columns={columns} dataSource={tableData} />
      </Card>
    </div>
  )
}

export default Index
