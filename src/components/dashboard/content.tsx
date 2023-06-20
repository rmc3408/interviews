import { Layout, Space, Button } from 'antd'
import Title from 'antd/es/typography/Title'
import { ArrowRightOutlined  } from '@ant-design/icons';
import { styled } from 'styled-components'
import Chart from '../chart';


const StyledButton = styled(Button)`
  padding: 24px 48px;
  display: flex; 
  align-items: center;
  margin-right: 24px;
  justify-content: center;
`
function DashboardContent() {
  return (
    <Space direction="vertical">
      <Title level={3}>Top Performing Articles</Title>
      <Chart />
    </Space>
  )
}

export default DashboardContent