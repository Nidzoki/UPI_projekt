import { useState } from 'react';
import { Menu, Input, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import "../App.css";


const NavUpperSch = (data) => {
    
    const idRasporeda = data.data.id
    const [nazivRasporeda, postaviNaziv] = useState(data.data.naziv);

    const [current, setCurrent] = useState('mail');
    const klik = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    async function NoviNaziv(event) {

        // console.log(event.target.value)
        postaviNaziv(event.target.value);

        const podaci = {
            name: event.target.value,
            type: data.data.tip
        }

        try {
            const response = await fetch(`http://localhost:8080/schedules/updateSchedule/${idRasporeda}`, {
                method: 'PUT',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(podaci)
            });

            const res = await response.json();

            console.log(response)
            if (!response.ok) {
                alert('Error deleting schedule:', res)
            }
        }
        catch (error) { alert('Error:', error) }
    }
    

    // function obrisiToken() {
    //     console.log("token je obrisan!")
    // }


    return (
        <div id="navGornjaSch">
            <div id="gornjiLijevi">
                <Input
                    id="imeRasporeda"
                    type="text"
                    name="name"
                    onChange={NoviNaziv}
                    value={nazivRasporeda}
                    placeholder="Name of schedule"
                    style={{ width: "200px" }}
                />
                <Button>Delete</Button>
            </div>

            <Menu onClick={klik} selectedKeys={[current]} mode="horizontal" style={{ backgroundColor: "inherit", color: "white", paddingRight: "10px" }}>
                <Menu.Item key="goBack" icon={<HomeOutlined />}>
                    <Link to="/pocetna"> Go back</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default NavUpperSch;
