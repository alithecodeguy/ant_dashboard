import React from 'react'
import { ConfigProvider } from 'antd'
import type { AppProps } from 'next/app'
import './../styles/fonts.module.css'

import theme from '../theme/themeConfig'
import Layout from '@/components/Layout'

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ConfigProvider>
)

export default App
