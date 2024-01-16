import { useState } from "react";
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, HomeOutlined } from '@ant-design/icons';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import "../App.css";
import appLogo from "../pic/logo-as1.png";
import prijavaKorisnika from "../../../reg_prij_pokusaj/prijava";

const stilSignUp={
    width: "25%",
    marginBottom:"20px"
}

function jeLiPopunjen(obj) {
    return Object.values(obj).every(element => element !== null); //vraća false ako je objekt prazan, provjeravamo je li korisnik unio podatke
}
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

    const provjeriPosalji = async (event) => {
        event.preventDefault()
        console.log(logIn_podaci)
        if (jeLiPopunjen(logIn_podaci)){
            const prijava = await prijavaKorisnika(logIn_podaci.email, logIn_podaci.password)
                    if(prijava.boolHomepage)
                        nav("/pocetna", { state: { userId: prijava.id}})
                    else{
                        console.error("Email ili lozinka netočna!")
                    }
                }
            
        else {
            alert("Some fields were not filled");
            console.log(confirmPassword)
        }

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
                    placeholder="Email" style={stilSignUp} />

                <Input.Password name="password" value={logIn_podaci.password} onChange={promjenaPodataka}
                    placeholder="Password" style={stilSignUp}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                <button type="submit" style={{ backgroundColor: "#E0E1DD", color: "black"}}>Log In</button>
            </form>

            <p>Don&#39;t have an account? Make one!</p>
            <Link to="/signup">
                <button>Sign up</button>
            </Link>
        </div>
    );
}

export default Login;
