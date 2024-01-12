import { useState } from 'react';
import { PlusCircleOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { Menu, Button, Modal, Card, Input, Radio } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import appLogo from '../pic/logo-as1.png'
import '../App.css';


const NavLeft = () => {
    const [nazivRasporeda, postaviNaziv] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [typeofSchedule, setType] = useState("Month");
    const nav = useNavigate();
    const [current, setCurrent] = useState('h');
    const onClick = (e) => {
        setCurrent(e.key);
    };

    function promijeniNaziv(event) {
        postaviNaziv(event.target.value);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    function makeSchedule() {
        if (typeofSchedule == "Month") nav("/monthSchedule", {state: nazivRasporeda})
        else nav("/weekSchedule", {state: nazivRasporeda})
    }

    function handleCancel() { setIsModalVisible(false) }

    function changeType(event) {
        setType(event.target.value)
    }

    return (
        <div id="navLeft">
            <Link to="/">
                <img src={appLogo} style={{ width: "150px", height: "auto" }} />
            </Link>
            <Button icon={<PlusCircleOutlined />} type="primary" style={{ backgroundColor: "#172539" }} onClick={showModal}>
                New schedule</Button>


            <Modal
                title="Make new schedule"
                open={isModalVisible}
                onOk={makeSchedule}
                onCancel={handleCancel}
            >
                <Card>
                    <Input placeholder="Name of schedule" onChange={promijeniNaziv} />
                    <p>Type of schedule: </p><br />
                    <Radio.Group onChange={changeType} value={typeofSchedule}>
                        <Radio value="Month">Month</Radio>
                        <Radio value="Week">Week</Radio>
                    </Radio.Group>
                </Card>
            </Modal>

            <Menu mode="vertical" onClick={onClick} selectedKeys={[current]} style={{ backgroundColor: 'inherit' }}>

                <Menu.Item key="month" icon={<UserOutlined />} style={{ color: "white" }}>
                    Month Schedules
                </Menu.Item>

                <Menu.Item key="week" icon={<TeamOutlined />} style={{ color: "white" }}>
                    Week Schedule
                </Menu.Item>
            </Menu>

        </div >
    )
}
export default NavLeft
