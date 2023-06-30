import { Col, Row, Typography, Avatar } from 'antd'
import { styled } from 'styled-components';

const { Text } = Typography;

const TopRowlevel = styled(Row)`
  margin-bottom: 20px;
`
function TopNavBar() {
  const PUBLISHER_NAME = 'Publisher Name';
  const HOSTNAME = 'Buzzing.com';
  
  return (
    <TopRowlevel gutter={16}>
      <Col span={4} >
        <Avatar size={44} src={<img src={'logo.png'} alt="avatar" />} />
      </Col>
      <Col span={19} offset={1}>
          <Col span={24}><Text strong style={{ fontSize: '18px'}}>{PUBLISHER_NAME}</Text></Col>
          <Col span={24}>{HOSTNAME}</Col>
        
      </Col>
    </TopRowlevel>
  )
}

export default TopNavBar
