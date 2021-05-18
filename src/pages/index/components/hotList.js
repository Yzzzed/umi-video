import React from 'react'
import { Card, Col, Row } from 'antd'
import HotCard from './hotCard'
import style from '../index.css'

const HotList = () => {
  return (
    <Card>
      <Row gutter={16}>
        <Col span={6}>
          <HotCard />
        </Col>
        <Col span={6}>
          <HotCard />
        </Col>
        <Col span={6}>
          <HotCard />
        </Col>
        <Col span={6}>
          <HotCard />
        </Col>
      </Row>
    </Card>
  )
}

export default HotList