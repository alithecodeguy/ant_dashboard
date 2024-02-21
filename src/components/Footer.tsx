import { Layout as AntdLayout } from 'antd'
const { Footer: AntdFooter } = AntdLayout

function Footer() {
  return (
    <AntdFooter style={{ textAlign: 'center', background: 'red' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </AntdFooter>
  )
}

export default Footer
