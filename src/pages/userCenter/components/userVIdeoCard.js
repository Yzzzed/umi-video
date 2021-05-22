import React from 'react'
import { Card } from 'antd'

const { Meta }  = Card

const UserVideoCard = props => {
  return (
    <Card
      style={{ width: '100%', margin: '10px' }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta title="title" description="xxxxxx" />
    </Card>
  )
}

export default UserVideoCard
