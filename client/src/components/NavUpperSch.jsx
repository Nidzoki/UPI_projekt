import { useState } from 'react';
import { Menu, Input, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import "../App.css";


const NavUpperSch = (naziv) => {
    const [current, setCurrent] = useState('mail');
    const klik = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const [nazivRasporeda, postaviNaziv] = useState(naziv);

    function NoviNaziv(event) {
        postaviNaziv(event.target.value);
    }

    return (
        <div id="navGornjaSch">
            <div id="gornjiLijevi">
                <Button type={"primary"} >Save</Button>
                <Button>Delete</Button>
                <Input
                    id="imeRasporeda"
                    type="text"
                    name="name"
                    onChange={NoviNaziv}
                    placeholder="Name of schedule"
                    style={{ width: "200px" }}
                />
            </div>

            <Menu onClick={klik} selectedKeys={[current]} mode="horizontal" style={{ backgroundColor: "inherit", color: "white", paddingRight: "10px" }}>                
                <Menu.Item key="user" icon={<UserOutlined />}>
                    <Link to="/userSettings">User</Link>
                </Menu.Item>

                <Menu.Item key="logout" icon={<LogoutOutlined />}>
                    <Link to="/"> Logout</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default NavUpperSch;
