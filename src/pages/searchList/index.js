import React from 'react'
import { Card, Col, Row } from 'antd'
import ListCard from './components/listCard'

const SearchList = props => {
  return (
    <Card>
      <Row gutter={8}>
        <Col span={6}>
          <ListCard src={'https://image.hyzed.cn/blog/3ba7f0825efe8230412124fcde8b46a4.jpg'} title={'test1'} description={'testsssssssssssssss'} />
        </Col>
        <Col span={6}>
        <ListCard src={'https://image.hyzed.cn/blog/286a676a8b4bf58346d8153e8281ad14.jpg'} title={'test2'} description={'testsssssss1111'} />
        </Col>
        <Col span={6}>
          <ListCard src={'https://image.hyzed.cn/blog/267b3dae70ac7916702076b3d11929d3.jpg'} title={'test3'} description={'t1111'} />
        </Col>
        <Col span={6}>
          <ListCard src={'https://image.hyzed.cn/blog/22c0ffa38e72420452759edc8d35ae9c.png'} title={'test5'} description={'test5'} />
        </Col>
        <Col span={6}>
          <ListCard src={'https://image.hyzed.cn/blog/77ec47fc3360c48a41536ab743bbb0b7.jpg'} title={'tttt2'} description={'tee1111'} />
        </Col>
        <Col span={6}>
          <ListCard />
        </Col>
      </Row>
    </Card>
  )
}

export default SearchList