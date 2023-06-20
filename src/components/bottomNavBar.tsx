import { Avatar } from 'antd'
import { Col, Row } from 'antd'

function BottomNavBar() {
  return (
    <Row>
      <Col span={6}>
        <Avatar size={40} src={<img src={'Avatar.png'} alt="avatar" />} />
      </Col>
      <Col span={18}>
        <Row>
          <Col span={24}><b>Sergey Golberg</b></Col>
          <Col span={24}>company@example.com</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default BottomNavBar
