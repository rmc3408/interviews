import { useRecoilState } from 'recoil'
import { userState } from '../state/subscription'
import { Avatar, Col, Row } from 'antd'


function BottomNavBar() {
  const [user , setUser] = useRecoilState(userState)
  return (
    <Row>
      <Col span={6}>
        <Avatar size={40} src={<img src={'Avatar.png'} alt="avatar" />} />
      </Col>
      <Col span={18}>
        <Row>
          <Col span={24}><b>{user.username}</b></Col>
          <Col span={24}>{user.email}</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default BottomNavBar
