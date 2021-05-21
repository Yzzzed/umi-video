import React from 'react';
import { Button, Result } from 'antd';
import router from 'umi/router';

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="该页面不存在"
    extra={
      <Button type="primary" onClick={() => router.push('/')}>
        返回首页
      </Button>
    }
  ></Result>
)

export default NoFoundPage