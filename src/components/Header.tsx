import { Layout as AntdLayout, Input, Avatar, Badge, Button } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import type { SearchProps } from 'antd/es/input/Search'
import { UserOutlined, BellOutlined, GlobalOutlined } from '@ant-design/icons'

const { Header: AntdHeader } = AntdLayout
const { Search } = Input

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
  console.log(info?.source, value)

function Header() {
  return (
    <AntdHeader
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <MenuUnfoldOutlined style={{ color: '#fff' }} />

        <div style={{ display: 'flex' }}>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 304 }}
          />
        </div>
      </div>
      <div style={{ gap: 8, color: '#fff' }}>
        <Button type="text" style={{ color: '#fff' }}>
          <GlobalOutlined style={{ width: 16, height: 16 }} />
          English
        </Button>
        <a href="#">
          <Badge count={21}>
            <BellOutlined style={{ width: 16, height: 16, color: '#fff' }} />
            {/* <Avatar shape="square" size="large" /> */}
          </Badge>
        </a>
        <Avatar
          icon={<UserOutlined />}
          style={{ paddingRight: 12, paddingLeft: 12 }}
        />
      </div>
    </AntdHeader>
  )
}

export default Header
