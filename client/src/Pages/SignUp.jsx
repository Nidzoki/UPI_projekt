import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, HomeOutlined } from '@ant-design/icons';
import appLogo from "../pic/logo-as1.png"
import "../App.css";

function Signup() {
    const nav = useNavigate();
    const [signUp_podaci, noviKorisnik] = useState({
        userName: "",
        password: "",
        email: "",
        name: "",
        lastName: ""
    });

    const [confirmPassword, provjeraLozinke] = useState("");

    function promjenaPodataka(event) {
        const { name, value } = event.target;
        noviKorisnik({ ...signUp_podaci, [name]: value });
        if (name == "confirmPassword") {

            provjeraLozinke(value)
        }

    }
    function imaLiBroj(tekst) {
        return /\d/.test(tekst);
    }


    const provjeriPosalji = (event) => {
        event.preventDefault()
        if (confirmPassword == signUp_podaci.password) {
            if (confirmPassword.length >= 8 && imaLiBroj(confirmPassword)) {
                //provjeri je li username uzet
                nav("/verify")
            }

        }
        else {
            alert("Passwords do not match!")
            provjeraLozinke("");
        }
    }

    return (
        <div style={{padding:"20px 0px"}}>
            <Link to="/" style={{position:"absolute", top:"10px", left:"10px"}}>
                <Button style={{cursor: 'pointer'}} icon={<HomeOutlined/>}>Go back</Button>
            </Link>
                <img src={appLogo} className="logoSlika" />

            <h2>Create your account!</h2>
            <form onSubmit={provjeriPosalji} className="forme">

                <Input type="text" name="name" value={signUp_podaci.name} onChange={promjenaPodataka}
                    placeholder="Your name" style={{ width: '25%' }} />

                <Input type="text" name="lastName" value={signUp_podaci.lastName} onChange={promjenaPodataka}
                    placeholder="Your last name" style={{ width: '25%' }} />

                <Input type="text" name="userName" value={signUp_podaci.userName} onChange={promjenaPodataka}
                    placeholder="Username" style={{ width: '25%' }} />

                <Input type="email" name="email" value={signUp_podaci.email} onChange={promjenaPodataka}
                    placeholder="Email" style={{ width: '25%' }} />

                <Input.Password name="password" value={signUp_podaci.password} onChange={promjenaPodataka}
                    placeholder="Password" style={{ width: '25%' }}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                <Input.Password name="confirmPassword" value={confirmPassword} onChange={promjenaPodataka}
                    placeholder="Confirm password" style={{ width: '25%' }}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                <button type="submit" style={{ backgroundColor: "#264c7e" }}>Sign up</button>
            </form>

            <p>Already have an account?</p>
            <Link to="/login">
                <button>Log in</button>
            </Link>
        </div>
    );
}

export default Signup;
