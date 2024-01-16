import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Input, Button, DatePicker } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, HomeOutlined } from '@ant-design/icons';
import appLogo from "../pic/logo-as1.png"
import "../App.css";
import {registracijaKorisnika} from "../../../reg_prij_pokusaj/prijava"

const stilSignUp={
    width: "25%",
    marginBottom:"20px"
}

function Signup() {
    const nav = useNavigate();
    const [signUp_podaci, noviKorisnik] = useState({
        name: "",
        lastName: "",
        password: "",
        email: "",
        bday: ""
    });

    function promjenaPodataka(event) {
        const { name, value } = event.target;
        noviKorisnik({ ...signUp_podaci, [name]: value });
    }

    function imaLiBroj(tekst) { //provjerava li ima li tekst (lozinka brojeva)
        return /\d/.test(tekst);
    }

    function jeLiPopunjen(obj) {
        return Object.values(obj).every(element => element !== null); //vraća false ako je objekt prazan, provjeravamo je li korisnik unio podatke
    }


    const provjeriPosalji = async (event) => {
        event.preventDefault()
        console.log(signUp_podaci)
        if (jeLiPopunjen(signUp_podaci)) {
            if (signUp_podaci.password.length >= 8 && imaLiBroj(signUp_podaci.password)) {
                    const registracija = await registracijaKorisnika(signUp_podaci.name,signUp_podaci.lastName,signUp_podaci.email, signUp_podaci.password, signUp_podaci.password, "2024-01-22T23:00:00.000Z")
                    if(registracija.boolPrijava)
                    nav("/pocetna", { state: { userId: registracija.userDetails.ID}})
                    else{
                        console.error("Greska pri registraciji!")
                    }
                }
            else {
                alert("Lozinka ne zadovoljava uvjete")
            }
        }
        else {
            alert("Some fields were not filled");
            console.log(confirmPassword)
        }
    }

    return (
        <div style={{ padding: "20px 0px" }}>
            <Link to="/" style={{ position: "absolute", top: "10px", left: "10px" }}>
                <Button style={{ cursor: 'pointer' }} icon={<HomeOutlined />}>Go back</Button>
            </Link>
            <img src={appLogo} className="logoSlika" />

            <h2>Create your account!</h2>
            <form onSubmit={provjeriPosalji} className="forme">

                <Input type="text" name="name" value={signUp_podaci.name} onChange={promjenaPodataka}
                    placeholder="Your name" style={stilSignUp} />

                <Input type="text" name="lastName" value={signUp_podaci.lastName} onChange={promjenaPodataka}
                    placeholder="Your last name" style={stilSignUp} />

                <Input type="email" name="email" value={signUp_podaci.email} onChange={promjenaPodataka}
                    placeholder="Email" style={stilSignUp} />

                <Input.Password name="password" value={signUp_podaci.password} onChange={promjenaPodataka}
                    placeholder="Password" style={stilSignUp}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                <label>Password has to be at least 8 characters and have one number</label><br />

                <button type="submit" style={{ backgroundColor: "#E0E1DD" , color: "black"}}>Sign up</button>
            </form>

            <p>Already have an account?</p>
            <Link to="/login">
                <button>Log in</button>
            </Link>
        </div>
    );
}

export default Signup;
