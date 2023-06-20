import { FormEvent } from 'react'
import { useRecoilState } from 'recoil'
import { authState, userState } from '../state/subscription'
import useForm from '../components/useForm'
import authService from '../auth/auth.service'
import { Form, Input, Button, Checkbox, Card } from 'antd'

function Login() {
  const [isLogged, setLogin] = useRecoilState<boolean>(authState)
  const [user , setUser] = useRecoilState(userState)
  const { input, handleInput, resetForm } = useForm({
    username: '',
    email: 'admin@gmail.com',
    password: 'admin',
  })

  const handleAuthentication = async (values: any) => {
    if (user.email === '') authService.register(input.email)
    const newUser = {
      username: '',
      email: values.email,
      password: values.password
    }
    try {
      await authService.login(newUser.email, newUser.password)
      setUser(newUser)
      setLogin(values.remember)
    } catch (error) {
      console.error('User email not matches', error)
    }
    resetForm()
  }

  return (
    <Card style={{ width: 384 }} bordered={false}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleAuthentication}
        autoComplete="off"
      >
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input value={input.email} size="large" onChange={handleInput} bordered={false} placeholder="example.email@gmail.com"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={input.password} size="large" onChange={handleInput} bordered={false} placeholder="Enter at least 8+ characters"/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="login-form-button">
          <Checkbox>Keep me logged in</Checkbox>
          <a href="">Forgot password</a>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Login
