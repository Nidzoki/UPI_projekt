import { SearchOutlined, NotificationOutlined, LogoutOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Input, Dropdown, Space, } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import "../App.css"


const NavUpper = () => {

    const [search, setSearch] = useState("");
    const nav = useNavigate();


    function Searching(event) {
        setSearch(event.target.value)
    }

    function obrisiToken(e) {
        if (e.key == "logout") {
            console.log("token je obrisan")
            nav("/")
        }
    }
    return (
        <div id="navGornja">
            <Input id="inputGornjaNav" type="text" name="search" value={search} onChange={Searching}
                placeholder="Search for schedules" style={{ width: '40%', height: "70%", float: "left", marginTop: "10px" }} icon={<SearchOutlined />} />

            <Menu style={{ backgroundColor: "inherit", color: "white", marginTop: "15px" }}>
                <Dropdown style={{ margin: "200px" }} overlay={<Menu>
                    <Link to="/payment"><Menu.Item key="pro" >Get PRO version</Menu.Item></Link>
                    <Menu.Item key="update">Updates</Menu.Item>
                </Menu>}>
                    <a>
                        <Space style={{ color: "white", marginRight: "20px" }}>
                            <NotificationOutlined /> Notifications
                        </Space>
                    </a>
                </Dropdown>
                <Dropdown overlay={
                    <Menu onClick={obrisiToken}>
                        <Menu.Item key="logout" icon={<LogoutOutlined />}>
                            Logout
                        </Menu.Item>
                        <Menu.Item key="user" icon={<SettingOutlined />}>
                            <Link to="/userSettings">Settings</Link>
                        </Menu.Item>
                    </Menu>}>
                    <a>
                        <Space style={{ color: "white" }}>
                            <UserOutlined /> User
                        </Space>
                    </a>

                </Dropdown>
            </Menu>
        </div >

    )
};
export default NavUpper;

