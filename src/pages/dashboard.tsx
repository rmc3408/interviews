import * as React from 'react'
import { Layout, Space } from 'antd'
import NavBar from '../components/menuNavBar'
import TopNavBar from '../components/topNavBar'
import BottomNavBar from '../components/bottomNavBar'
import { styled } from 'styled-components'
const { Header, Sider, Content } = Layout
//import { mainListItems, secondaryListItems } from '../components/listItems'
//import Chart from '../components/chart'
//import Orders from '../components/orders'

const siderStyle: React.CSSProperties = {
  padding: '16px',
  backgroundColor: '#FFFFFF',
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: '20vh',
  backgroundColor: '#7dbcea',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '80vh',
  color: '#fff',
  backgroundColor: '#108ee9',
}

const SiderNavBar = styled(Sider)`
  & > .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
  }
  & > .ant-layout-sider-children > *:last-child {
    flex: 1 0 auto;
    align-content: flex-end;
  }
`

function DashboardLayout() {
  return (
    <Space
      direction="vertical"
      wrap
      style={{ fontSize: 'inherit', width: '100%', height: '100%', boxSizing: 'border-box' }}
    >
      <Layout style={{ fontSize: 'inherit' }}>
        <SiderNavBar width={252} style={siderStyle}>
          <TopNavBar />
          <NavBar />
          <BottomNavBar />
        </SiderNavBar>
        <Layout>
          <Header style={headerStyle}>Header</Header>
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
    </Space>
  )
}

export default DashboardLayout
