import { Layout, Space, Button, Divider } from 'antd'
import Title from 'antd/es/typography/Title'
import { ArrowRightOutlined } from '@ant-design/icons'
import { styled } from 'styled-components'
const { Header, Sider, Content } = Layout

const StyledButton = styled(Button)`
  padding: 24px 48px;
  display: flex;
  align-items: center;
  margin-right: 24px;
  justify-content: center;
`


function DashboardHeader() {
  return (
    <>
      <Space direction="vertical">
        <Title level={1}>Dashboard</Title>
        <Space wrap>
          <StyledButton type="primary">
            View On-Going Missions <ArrowRightOutlined />
          </StyledButton>
          <StyledButton type="primary">
            View On-Going Missions <ArrowRightOutlined />
          </StyledButton>
          <StyledButton type="primary">
            View On-Going Missions <ArrowRightOutlined />
          </StyledButton>
        </Space>
      </Space>
      
    </>
  )
}

export default DashboardHeader
