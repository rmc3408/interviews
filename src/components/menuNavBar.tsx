import React from 'react'
import { AppstoreOutlined, DownloadOutlined, ExceptionOutlined, BarChartOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
): MenuItem {
  return {
    key,
    icon, 
    label,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('DashBoard', 'sub1', <AppstoreOutlined style={{ fontSize: '24px', color: '#FF402BFF' }} />),
  getItem('Mission', 'sub2', <DownloadOutlined style={{ fontSize: '24px', color: '#565D6DFF' }} />),
  getItem('Media', 'sub3', <ExceptionOutlined style={{ fontSize: '24px', color: '#565D6DFF' }}/>),
  getItem('Analytics', 'sub4', <BarChartOutlined style={{ fontSize: '24px', color: '#565D6DFF' }}/>)
]

function MenuNavBar() {
  return (
    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} items={items} style={{ borderInlineEnd: 'none' }}/>
  )
}

export default MenuNavBar
