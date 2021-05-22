import React from 'react'
import { Card, Avatar, Button, Row, Col } from 'antd'
import style from './index.css'
import UserVideoCard from './components/userVIdeoCard'

const UserCenter = props => {
  return (
    <Card>
      <div className={style.userInfo}>
        <div className={style.avatar}>
          <Avatar size={64} style={{backgroundColor: '#7265e6', verticalAlign: 'middle'}}>user</Avatar>
          <div>
            <span>ID:</span>
            <span>xxxx</span>
          </div>
          <div>
            <span>昵称:</span>
            <span>xxxxxx</span>
          </div>
        </div>
        <div className={style.uploadBtn}>
        <Button type="danger" shape="round" icon="upload" size='large'>
          上传视频
        </Button>
        </div>
        <div className={style.scoinContainer}>
          <div>
            <span style={{fontSize: 16,}}>Scoin: </span>
            <span style={{fontSize: 20, fontWeight: 'bold'}}>9999</span>
          </div>
          <Button shape="round" size='large' style={{background: '#24305e', color: '#fff', marginBottom: 10,}}>
            获得更多
          </Button>
          <Button shape="round" size='large' style={{background: '#24305e', color: '#fff'}}>
            出售Scoin
          </Button>
        </div>
      </div>
      <Card className={style.userVideoCard} title="我的视频：">
        <div className={style.userVideoList}>
          <Row gutter={8}>
            <Col span={6}>
              <UserVideoCard />
            </Col>
            <Col span={6}>
              <UserVideoCard />
            </Col>
            <Col span={6}>
              <UserVideoCard />
            </Col>
            <Col span={6}>
              <UserVideoCard />
            </Col>
            <Col span={6}>
              <UserVideoCard />
            </Col>
            <Col span={6}>
              <UserVideoCard />
            </Col>
            <Col span={6}>
              <UserVideoCard />
            </Col>
          </Row>
        </div>
      </Card>
    </Card>
  )
}

export default UserCenter
