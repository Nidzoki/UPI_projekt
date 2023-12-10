//poslat na email ovu str
import { useState } from "react";
import { Input} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import appLogo from "../pic/logo-as1.png";


function Login() {

    const nav = useNavigate();

    const [changePassword, setPasswords] = useState({
        password: "",
        confirm: "",
    });

    function promjenaPodataka(event) {
        const { name, value } = event.target;
        setPasswords({ ...changePassword, [name]: value });

    }

    const provjeriPosalji = (event) => {
        event.preventDefault()
        if (changePassword.password == changePassword.confirm) {
            console.log("Password: ", changePassword.password)
            //promijeni lozinku
            nav("/pocetna")
        }

    }

    return (
        <div >
            <img src={appLogo} className="logoSlika" />

            <h2>Change your password!</h2>
            <form onSubmit={provjeriPosalji} className="forme">

                <Input.Password name="password" value={changePassword.password} onChange={promjenaPodataka}
                    placeholder="New password" style={{ width: '25%' }}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                <Input.Password name="confirmPassword" value={changePassword.confirm} onChange={promjenaPodataka}
                    placeholder="Confirm password" style={{ width: '25%' }} />

                <button type="submit" style={{ backgroundColor: "#e91e63" }}>Change your password</button>
            </form>
        </div>
    );
}

export default Login;
