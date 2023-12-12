import { useState } from 'react';
import { PlusCircleOutlined, UserOutlined, TeamOutlined, ToTopOutlined, FolderOpenOutlined, DownOutlined } from '@ant-design/icons';
import { Menu, Button, Modal, Card, Input, Radio } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import appLogo from '../pic/logo-as1.png'
import '../App.css';


const NavLeft = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [typeofSchedule, setType] = useState("Month");
    const nav = useNavigate();
    const [current, setCurrent] = useState('h');
    const onClick = (e) => {
        setCurrent(e.key);
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    function makeSchedule() {
        if (typeofSchedule !== "") {
            if (typeofSchedule == "Month") {
                console.log(true)
                nav("/monthSchedule")
            }
            else {
                console.log(false)
                nav("/")
            }
        }
    };

    function handleCancel() { setIsModalVisible(false) }

    function changeType(event) {
        setType(event.target.value)
        console.log(event.target)
    }

    return (
        <div id="navLeft">
            <Link to="/">
                <img src={appLogo} style={{ width: "100px", height: "auto" }} />
            </Link>
            <Button icon={<PlusCircleOutlined />} type="primary" style={{ backgroundColor: "#e91e63" }} onClick={showModal}>
                New schedule</Button>


            <Modal
                title="Make new schedule"
                visible={isModalVisible}
                onOk={makeSchedule}
                onCancel={handleCancel}
            >
                <Card>
                    <Input placeholder="Name of schedule" />
                    <p>Type of schedule: </p><br />
                    <Radio.Group onChange={changeType} value={typeofSchedule}>
                        <Radio value="Month">Month</Radio>
                        <Radio value="Week">Week</Radio>
                    </Radio.Group>
                </Card>
            </Modal>

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
