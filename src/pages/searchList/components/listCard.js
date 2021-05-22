import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

const ListCard = props => {
  return (
    <Card
      style={{ width: '100%', margin: '10px' }}
      cover={
        <img
          alt="example"
          style={{width: 295, height: 166}}
          src={props.src ? props.src : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
        />
      }
    >
      <Meta title={props.title ? props.title : 'title'} description={props.description ? props.description : "xxxxxx"} />
    </Card>
  )
}

export default ListCard

