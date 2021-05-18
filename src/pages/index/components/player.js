import React from 'react'
import Play from 'griffith'
import style from '../index.css'
const Player = (props) => {
  const { width = '100%' } = props
  console.log(props)
  const sources = {
    hd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    },
    sd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
    },
  }

  return (
    <div className={style.player} style={{width: width}}>
      <Play sources={sources} />
    </div>
    
  )
}

export default Player