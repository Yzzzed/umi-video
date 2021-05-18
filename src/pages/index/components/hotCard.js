import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

const HotCard = () => {
  return (
    <Card
      style={{ width: 300 }}
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

export default HotCard