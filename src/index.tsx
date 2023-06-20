import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RecoilRoot } from 'recoil'
import { ConfigProvider } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider theme={{ token: { 
        colorPrimary: '#FF402BFF', 
        colorLink: '##FF402BFF',
        colorLinkActive: '##FF402BFF',
        colorInfoActive: '##FF402BFF',
        fontFamily: 'Arial'
        } }}>
        <App />
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>
)

reportWebVitals()
