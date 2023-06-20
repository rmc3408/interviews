import { Avatar } from 'antd'
import { Col, Row } from 'antd'

function TopNavBar() {
  return (
    <Row gutter={16} style={{ marginBottom: '20px'}}>
      <Col span={4} >
        <Avatar size={40} src={<img src={'logo.png'} alt="avatar" />} />
      </Col>
      <Col span={19} offset={1}>
        <Row>
          <Col span={24}><b>Publisher Name</b></Col>
          <Col span={24}>Buzzing.com</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default TopNavBar
