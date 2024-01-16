import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Menu, Button, Modal, Card, Input, Radio } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import appLogo from '../pic/logo-as1.png'
import '../App.css';


const NavLeft = () => {
    const [nazivRasporeda, postaviNaziv] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [typeofSchedule, setType] = useState("Month");
    const nav = useNavigate();
    const [current, setCurrent] = useState('h');
    const onClick = (e) => {
        setCurrent(e.key);
    };

    function promijeniNaziv(event) { postaviNaziv(event.target.value) }

    const showModal = () => { setIsModalVisible(true) };


    async function makeSchedule() {
        //const {userID, scheduleName, type} = req.body
        if (nazivRasporeda != "") {

            const podaci = {
                "userID": 11,
                "scheduleName": nazivRasporeda,
                "type": typeofSchedule
            }
            let raspored = undefined

            const schedule = await fetch("http://localhost:8080/schedules",
                {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(podaci)
                })
                .then(response => response.json())
                .then(data => { raspored = data })
                .catch(error => console.error('Error:', error))

            if (raspored !== undefined) {
                // console.log("Naziv rasporeda i id: ", raspored.ID)

                if (typeofSchedule == "Month") {
                    nav("/monthSchedule", { state: { id: raspored.ID, naziv: nazivRasporeda, tip: typeofSchedule } }) //id za update rasporeda, naziv za naziv rasporeda
                }
                else nav("/weekSchedule", { state: { id: raspored.ID, naziv: nazivRasporeda, tip: typeofSchedule } }) 
            }
        }
        else { alert("Name of schedule can't be emplty") }
    }
    function handleCancel() { setIsModalVisible(false) }

    function changeType(event) { setType(event.target.value) }

    return (
        <div id="navLeft">
            <Link to="/pocetna">
                <img src={appLogo} style={{ width: "150px", height: "auto" }} />
            </Link>
            <Button icon={<PlusCircleOutlined />} type="primary" style={{ backgroundColor: "#172539" }} onClick={showModal}>
                New schedule</Button>


            <Modal
                title="Make new schedule" open={isModalVisible} onOk={makeSchedule} onCancel={handleCancel} >
                <Card>
                    <Input placeholder="Name of schedule" name="name of sch" onChange={promijeniNaziv} />

                    <p>Type of schedule: </p>
                    <Radio.Group onChange={changeType} value={typeofSchedule}>
                        <Radio value="Week">Week</Radio>
                        <Radio value="Month">Month</Radio>
                    </Radio.Group>
                </Card>
            </Modal>

            <Menu mode="vertical" onClick={onClick} selectedKeys={[current]} style={{ backgroundColor: 'inherit' }}>

                <Menu.Item key="month" style={{ color: "white" }}>
                    Month Schedules
                </Menu.Item>

                <Menu.Item key="week" style={{ color: "white" }}>
                    Week Schedule
                </Menu.Item>
            </Menu>

        </div >
    )
}
export default NavLeft
