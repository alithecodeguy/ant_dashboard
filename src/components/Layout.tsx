import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'
import Breadcrumb from './Breadcrumb'
import { Layout as AntdLayout, theme } from 'antd'

const { Content, Sider } = AntdLayout

const Layout: React.FC = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <AntdLayout>
      <Header />
      <AntdLayout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu />
        </Sider>
        <AntdLayout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
          <Footer />
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
