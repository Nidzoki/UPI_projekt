import { useState } from 'react';
import { Menu, Input, Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"
import "../App.css";


const NavUpperSch = (naziv) => {
    const [current, setCurrent] = useState('mail');
    const klik = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const [nazivRasporeda, postaviNaziv] = useState(naziv.naziv);

    function NoviNaziv(event) {
        postaviNaziv(event.target.value);
        console.log(nazivRasporeda);
    }

    function obrisiToken(){
        console.log("token je obrisan!")
    }

    function saveData(){

    }

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
                <Menu.Item key="goBack" icon={<HomeOutlined />}onClick={obrisiToken}>
                    <Link to="/pocetna"> Go back</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default NavUpperSch;
