import { useState } from 'react';
import { PlusCircleOutlined, UserOutlined, TeamOutlined, ToTopOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import appLogo from '../pic/logo-as1.png'
import '../App.css'


function NavLeft() {
    const [current, setCurrent] = useState('h');
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <div id="navLeft">
            <img src={appLogo} style={{ width: "100px", height: "auto" }} />
            <Button icon={<PlusCircleOutlined />} type="primary" style={{ backgroundColor: "#e91e63" }}>
                New schedule</Button>

            <Menu mode="vertical" onClick={onClick} selectedKeys={[current]} style={{ backgroundColor: '#333', color: "#ffffff" }}>
                <Menu.Item key="u" icon={<ToTopOutlined />} style={{ color: "white" }}>
                    <Link to="/">Upload</Link>
                </Menu.Item>

                <Menu.Item key="c" icon={<UserOutlined />} style={{ color: "white" }}>
                    <Link to="/">Created by me</Link>
                </Menu.Item>

                <Menu.Item key="s" icon={<TeamOutlined />} style={{ color: "white" }}>
                    <Link to="/">Shared with me</Link>
                </Menu.Item>

                <Menu.Item key="f" icon={<FolderOpenOutlined />} style={{ color: "white" }}>
                    Folders
                </Menu.Item>
            </Menu>

        </div>
    )
}
export default NavLeft
