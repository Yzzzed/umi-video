import React from 'react'
import style from './index.css'
import { Input, Avatar } from 'antd'
import { Link } from 'umi'

const { Search }  = Input
const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/"><div className={style.logo}></div></Link>  
      <Search className={style.search} placeholder="search" onSearch={value => console.log(value)} enterButton />
      <Avatar icon="user" />
    </div>
  )
}

export default Header