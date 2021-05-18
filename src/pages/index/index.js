import React from 'react'
import { Card } from 'antd'
import Player from './components/player'
import HotList from './components/hotList'
const Index = () => {
  return (
    <Card style={{background: '#c3c7da'}}>
      <Player width={'60%'} />
      <HotList></HotList>
    </Card>
  )
}

export default Index