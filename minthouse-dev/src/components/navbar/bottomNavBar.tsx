import { useRecoilState } from 'recoil'
import { userState } from '../../state/subscription'
import { Avatar, Col, Row } from 'antd'

function BottomNavBar() {
  const [user, _] = useRecoilState(userState)
  
  return (
    <Row>
      <Col span={6}>
        <Avatar size={40} src={<img src={'Avatar.png'} alt="avatar" />} />
      </Col>
      <Col span={18}>
        <Col span={24}>
          <b>{user.username}</b>
        </Col>
        <Col span={24}>{user.email}</Col>
      </Col>
    </Row>
  )
}

export default BottomNavBar
