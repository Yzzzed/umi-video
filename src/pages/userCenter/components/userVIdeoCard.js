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
          style={{width: '222px', height: '121px',}}
          src={props.src ? props.src : 'https://image.hyzed.cn/blog/157c59376b0940958ff76bcac35d9192.jpg'}
        />
      }
    >
      <Meta title="title" description="xxxxxx" />
    </Card>
  )
}

export default UserVideoCard
