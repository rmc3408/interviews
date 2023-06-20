import * as React from 'react'
import { Layout, Space, Divider } from 'antd'
import NavBar from '../components/menuNavBar'
import TopNavBar from '../components/topNavBar'
import BottomNavBar from '../components/bottomNavBar'
import { styled } from 'styled-components'
import DashboardHeader from '../components/dashboard/header'
import DashboardContent from '../components/dashboard/content'
const { Header, Sider, Content } = Layout
//import { mainListItems, secondaryListItems } from '../components/listItems'
//import Chart from '../components/chart'
//import Orders from '../components/orders'

const siderStyle: React.CSSProperties = {
  padding: '16px',
  backgroundColor: '#FFFFFF',
  //borderRight: '1px solid gray'
}

const headerStyle: React.CSSProperties = {
  height: '20vh',
  backgroundColor: '#fff',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '80vh',
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
      size={[0, 48]}
      style={{ fontSize: 'inherit', width: '100%', height: '100%', boxSizing: 'border-box' }}
    >
      <Layout style={{ fontSize: 'inherit' }}>
        <SiderNavBar width={252} style={siderStyle}>
          <TopNavBar />
          <NavBar />
          <BottomNavBar />
        </SiderNavBar>
        <Divider type="vertical" style={{ margin: 0}} />
        <Layout>
          <Header style={headerStyle}><DashboardHeader /></Header>
          <Content style={contentStyle}><DashboardContent /></Content>
        </Layout>
      </Layout>
    </Space>
  )
}

export default DashboardLayout
