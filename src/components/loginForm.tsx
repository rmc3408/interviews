import { useRecoilState } from 'recoil'
import { authState, userState } from '../state/subscription'
import useForm from './useForm'
import authService from '../auth/auth.service'
import { Form, Input, Button, Checkbox, Card, notification } from 'antd'

function Login() {
  const [isLogged, setLogin] = useRecoilState<boolean>(authState)
  const [user, setUser] = useRecoilState(userState)
  const { input, handleInput, resetForm } = useForm({
    username: '',
    email: '',
    password: '',
  })
  const [api, contextHolder] = notification.useNotification()

  const openNotificationWithIcon = (type: 'error') => {
    api[type]({
      message: 'Login Error',
      description: 'Entered User email not matches admin@gmail.com',
    })
  }

  const handleAuthentication = async (values: any) => {
    if (user.email === '') authService.register('admin@gmail.com')
    const newUser = {
      username: 'Sergey Golberg',
      email: values.email,
      password: values.password,
    }
    try {
      await authService.login(newUser.email, newUser.password)
      setUser(newUser)
      setLogin(values.remember)
    } catch (error) {
      openNotificationWithIcon('error')
      console.error('User email not matches', error)
    }
    resetForm()
  }

  return (
    <Card style={{ width: 384 }} bordered={false}>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleAuthentication}
        autoComplete="off"
      >
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input
            value={input.email}
            size="large"
            onChange={handleInput}
            bordered={false}
            placeholder="example.email@gmail.com"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            value={input.password}
            size="large"
            onChange={handleInput}
            bordered={false}
            placeholder="Enter at least 8+ characters"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" style={{ display: 'inline-flex' }}>
          <Checkbox>Keep me logged in</Checkbox>
          <a href="" style={{ marginLeft: '54px' }}>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Login
