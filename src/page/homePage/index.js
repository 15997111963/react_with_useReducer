import React, { useEffect, useContext } from 'react'
import { CountContext } from '@/App'
import './style.less'

const HomePage = () => {
  const [{ user: { isLogin } }, dispatch] = useContext(CountContext)

  useEffect(() => {
    dispatch({ type: 'user/setLogin', state: true })
  }, [dispatch])

  return ( 
    <div className="homepage">{isLogin ? "已登录" : "未登录"}</div>
  )
}

export default HomePage
