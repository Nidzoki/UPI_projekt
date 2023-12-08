import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Menu, Input } from 'antd';
import { useState } from 'react';
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
    }
];
const App = () => {
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
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme='dark'>
                <Menu.Item key="s" icon={<SearchOutlined />} style={{ color: "white" }}>
                    <Input type="text" name="name" value={search} onChange={Searching}
                        placeholder="Search schedules" style={{ width: '25%' }} /> 
                        {/* ne radi, help */}
                </Menu.Item>
            </Menu>
        </div>
    )
};
export default App;