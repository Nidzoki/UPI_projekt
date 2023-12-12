import { useState } from 'react';
import { Menu, Input, Button } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import "../App.css";

const userSettings = [
    {
        key: 'notification', icon: <BellOutlined />,
        children: [
            {
               key: "setting1", label: 'Item 1'
            },
            {
                key: "setting2", label: 'Item 2'
             },
        ],
    }, {
        key: 'userSettings', icon: <UserOutlined />,
        children: [{
            key: "checkSettings", label: 'Check settings'
         },
         {
             key: "logout", label: 'Log out'
          },
        ],
    }
];


const NavUpperSch = () => {
    const [current, setCurrent] = useState('mail');
    const klik = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const [naziv, postaviNaziv] = useState('');

    function NoviNaziv(event) {
        postaviNaziv(event.target.value);
    }

    return (
        <div id="navGornjaSch">
            <div id="gornjiLijevi">
                <Button type={"primary"}>Save changes</Button>
                <Button>Delete schedule</Button>
                <Input
                    id="imeRasporeda"
                    type="text"
                    name="name"
                    value={naziv}
                    onChange={NoviNaziv}
                    placeholder="Name of schedule"
                    style={{ width: "200px" }}
                />
            </div>

            <Menu id="menuGornjaNav" onClick={klik} selectedKeys={[current]} mode="horizontal" items={userSettings} style={{ backgroundColor: "transparent" }}/>
        </div>
    );
};

export default NavUpperSch;
