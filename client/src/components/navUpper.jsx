import { UserOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Menu, Input } from 'antd';
import { useState } from 'react';
import "../App.css"
const items = [
    {
        key: 'notification', icon: <BellOutlined />,
        children: [
            {
                type: 'not2', label: 'Item 1', children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'not2',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    }, {
        key: 'userSettings', icon: <UserOutlined />,
        children: [
            {
                type: 'user1', label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'user2',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    }
];
const NavUpper = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const [search, setSearch] = useState("");

    function Searching(event) {
        setSearch(event.target.value)
    }
    return (
        <div id="navGornja">
            <Input id="inputGornjaNav" type="text" name="name" value={search} onChange={Searching}
                placeholder="Search schedules" style={{ width: '50%', float: "left" }} icon={<SearchOutlined />} />
            <Menu id="menuGornjaNav" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: "transparent" }}>

            </Menu>
        </div>
    )
};
export default NavUpper;