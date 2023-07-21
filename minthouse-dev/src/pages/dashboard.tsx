import * as React from 'react'
import { Layout, Space, Divider } from 'antd'
import NavBar from '../components/navbar/menuNavBar'
import TopNavBar from '../components/navbar/topNavBar'
import BottomNavBar from '../components/navbar/bottomNavBar'
import { styled } from 'styled-components'
import DashboardHeader from '../components/dashboard/header'
import DashboardContent from '../components/dashboard/content'
const { Header, Sider, Content } = Layout


const siderStyle: React.CSSProperties = {
  padding: '16px',
  backgroundColor: '#FFFFFF',
}

const headerStyle: React.CSSProperties = {
  height: '20vh',
  backgroundColor: '#fff',
}

const contentStyle: React.CSSProperties = {
  height: '80vh',
  backgroundColor: '#fbfafa',
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

const TopLevelSpace = styled(Space)`
  font-size: inherit;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;


function DashboardLayout() {
  return (
    <TopLevelSpace direction="vertical">
      <Layout style={{ fontSize: 'inherit' }}>
        <SiderNavBar width={252} style={siderStyle}>
          <TopNavBar />
          <NavBar />
          <BottomNavBar />
        </SiderNavBar>
        <Divider type="vertical" style={{ margin: 0 }} />
        <Layout>
          <Header style={headerStyle}>
            <DashboardHeader />
          </Header>
          <Content style={contentStyle}>
            <DashboardContent />
          </Content>
        </Layout>
      </Layout>
    </TopLevelSpace>
  )
}

export default DashboardLayout
