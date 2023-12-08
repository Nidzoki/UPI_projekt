import { UserOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Menu, Input } from 'antd';
import { useState } from 'react';
import "../App.css"
const items = [
    {
        key: 'SubMenu', icon: <UserOutlined />,
        children: [
            {
                type: 'group', label: 'Item 1', children: [
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
                type: 'group',
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
        key: 'notifications', icon: <BellOutlined />,
        children: [
            {
                type: 'group', label: 'Item 1',
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
                type: 'group',
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
            
            <Input type="text" name="name" value={search} onChange={Searching}
                placeholder="Search schedules" style={{ width: '50%', float: "left" }} icon={<SearchOutlined />} />
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{ backgroundColor: "transparent" }}>

            </Menu>
        </div>
    )
};
export default NavUpper;