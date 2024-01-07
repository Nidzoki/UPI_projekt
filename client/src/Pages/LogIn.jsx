import { useState } from "react";
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, HomeOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import "../App.css";
import appLogo from "../pic/logo-as1.png";


function Login() {

    const nav = useNavigate();

    const [logIn_podaci, noviKorisnik] = useState({
        email: "",
        password: "",
    });

    function promjenaPodataka(event) {
        const { name, value } = event.target;
        noviKorisnik({ ...logIn_podaci, [name]: value });

    }

    const provjeriPosalji = (event) => {
        event.preventDefault()
        console.log(logIn_podaci)
        //provjeri postoji li taj korisnik
        //ako je -> token !!!
        nav("/pocetna")

    }

    return (
        <div >
            <Link to="/" style={{ position: "absolute", top: "10px", left: "10px" }}>
                <Button style={{ cursor: 'pointer' }} icon={<HomeOutlined />}>Go back</Button>
            </Link>

            <img src={appLogo} className="logoSlika" />

            <h2>Welcome back!</h2>
            <form onSubmit={provjeriPosalji} className="forme">
                <Input type="email" name="email" value={logIn_podaci.email} onChange={promjenaPodataka}
                    placeholder="Email" style={{ width: '25%' }} />

                <Input.Password name="password" value={logIn_podaci.password} onChange={promjenaPodataka}
                    placeholder="Password" style={{ width: '25%' }}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                <p><Link to="/changepassword">Forgot password?</Link></p> {/* postaviti kako prominiti lozinku */}

                <button type="submit" style={{ backgroundColor: "264c7e" }}>Log In</button>
            </form>

            <p>Don&#39;t have an account? Make one!</p>
            <Link to="/signup">
                <button>Sign up</button>
            </Link>
        </div>
    );
}

export default Login;
