import { HomeOutlined, EditOutlined, CheckCircleOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    setCurrent(e.key);
  };


  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ backgroundColor: '#0D1B2A', color: "#ffffff", display: "flex", justifyContent: "right", marginRight: "10px" }}>
        <Menu.Item key="h" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="s" icon={<EditOutlined />}>
          <Link to="/signup">Sign up</Link>
        </Menu.Item>
        <Menu.Item key="l" icon={<CheckCircleOutlined />}>
          <Link to="/login">Log in</Link>
        </Menu.Item>
        <Menu.Item key="c" icon={<MailOutlined />}>
          <a href="mailto:AdaptSchedule@gmail.com"> Contact us </a>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  )
};
export default Header;