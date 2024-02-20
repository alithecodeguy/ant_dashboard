import React from 'react'
import type { MenuProps } from 'antd'
import { Layout as AntdLayout, Menu } from 'antd'
const { Header: AntdHeader } = AntdLayout
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}))

function Header() {
  return (
    <AntdHeader style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
        style={{ flex: 1, minWidth: 0 }}
      />
    </AntdHeader>
  )
}

export default Header
