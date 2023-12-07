import { useState } from "react";
import "../App.css";
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Login() {
    const [logIn_podaci, noviKorisnik] = useState({
        userName: "",
        password: "",
        email: "",
        name: "",
        lastName: "",
    });

    function promjenaPodataka(event) {
        const { name, value } = event.target;
        noviKorisnik({ ...logIn_podaci, [name]: value });

    }


    const provjeriPosalji = (event) => {
        event.preventDefault()
        console.log(logIn_podaci)
    }

    return (
        <div >
            <h2>Log In</h2>
            <form onSubmit={provjeriPosalji} className="forme">
                <Input type="email" name="email" value={logIn_podaci.email} onChange={promjenaPodataka}
                    placeholder="Email" style={{ width: '25%' }} />

                <Input.Password name="password" value={logIn_podaci.password} onChange={promjenaPodataka}
                    placeholder="Password" style={{ width: '25%' }}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;
