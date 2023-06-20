import { Row } from 'antd'
import { styled } from 'styled-components'
import LoginForm from '../components/loginForm'
import { Typography, Avatar } from 'antd'

const { Title } = Typography

const MainPageBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 40%;
  min-width: 600px;
  width: 60vw;
  height: 100%;
  background: #ff7029ff;
  border-radius: 360px 0px 0px 0px;
`

const PersonBackground = styled.img`
  position: absolute;
  bottom: 0px;
  left: 52%;
  height: 90%;
`

const WelcomeLoginBox = styled.div`
  position: relative;
  margin: 0 10%;
  text-align: center;
  z-index: 1;
`

function LoginPage() {
  return (
    <>
      <Row>
        <WelcomeLoginBox>
          <Avatar size={48} style={{ margin: '48px auto 140px auto ' }} src={<img src={'logo.png'} alt="avatar" />} />
          <Title level={1}>Welcome Back!</Title>
          <p>Enter your credentials to access your account</p>
          <LoginForm />
        </WelcomeLoginBox>
        <MainPageBackground />
        <PersonBackground src="person.png" alt="person" />
      </Row>
    </>
  )
}

export default LoginPage
