import { SearchOutlined, NotificationOutlined, DownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Input, Dropdown, Space, } from 'antd';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"
import "../App.css"

const items = [
    {
        key:"changes", label: 'Recent changes',
    },
    {
        key: 'update', label: 'Updates'
    },
    {
        key: 'pro', label: 'Get PRO version',
    },
]


const NavUpper = () => {
    const nav = useNavigate();
    const [current, setCurrent] = useState("");
    const onClick = (e) => {
        console.log("yippee")
        setCurrent(e.key);
        if (current == "pro"){
            nav("/payment")
        }
    };

    const [search, setSearch] = useState("");

    function Searching(event) {
        setSearch(event.target.value)
    }

    function obrisiToken(){
        console.log("token je obrisan")
    }
    return (
        <div id="navGornja">
            <Input id="inputGornjaNav" type="text" name="name" value={search} onChange={Searching}
                placeholder="Search for schedules" style={{ width: '40%', height: "70%", float: "left", marginTop:"10px" }} icon={<SearchOutlined />} />

            <Menu id="menuGornjaNav" onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ backgroundColor: "transparent" }}>
                <Menu.Item key="logout" icon={<LogoutOutlined />} style={{ color: "white" }} onClick={obrisiToken}>
                    <Link to="/">Logout</Link>
                </Menu.Item>

                <Dropdown overlay={<Menu>{items.map((item) => <Menu.Item key={item.key} {...item}>{item.label} </Menu.Item>)}</Menu>}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space style={{color: "white"}}>
                        <NotificationOutlined /> Notifications<DownOutlined />
                        </Space>
                    </a>
                </Dropdown>

            </Menu>
        </div>

    )
};
export default NavUpper;

