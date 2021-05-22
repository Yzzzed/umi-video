import React from 'react'
import { Card, Col, Row } from 'antd'
import ListCard from './components/listCard'

const SearchList = props => {
  return (
    <Card>
      <Row gutter={8}>
        <Col span={6}>
          <ListCard />
        </Col>
        <Col span={6}>
          <ListCard />
        </Col>
        <Col span={6}>
          <ListCard />
        </Col>
        <Col span={6}>
          <ListCard />
        </Col>
        <Col span={6}>
          <ListCard />
        </Col>
        <Col span={6}>
          <ListCard />
        </Col>
      </Row>
    </Card>
  )
}

export default SearchList