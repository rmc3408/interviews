import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RecoilRoot } from 'recoil'
import { ConfigProvider } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const ThemeTokens = {
  colorPrimary: '#FF402BFF', 
  colorLink: '##FF402BFF',
  colorLinkActive: '##FF402BFF',
  colorText: '##323743FF',
  fontFamily: 'Arial'
}

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider theme={{ token: ThemeTokens }}>
        <App />
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>
)

reportWebVitals()
