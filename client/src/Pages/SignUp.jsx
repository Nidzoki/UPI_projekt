import { useState } from "react";
import "../App.css";
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

function Signup() {
    const [signUp_podaci, noviKorisnik] = useState({
        userName: "",
        password: "",
        email: "",
        name: "",
        lastName: ""
    });

    const [confirmPassword, provjeraLozinke] = useState();

    function promjenaPodataka(event) {
        const { name, value } = event.target;
        noviKorisnik({ ...signUp_podaci, [name]: value });

        if (name == confirmPassword) { provjeraLozinke(value) }
    }


    const provjeriPosalji = (event) => {
        event.preventDefault()
        if (confirmPassword === signUp_podaci.password){
            console.log(signUp_podaci)
        }
        else{
            alert("Passwords do not match!")
            provjeraLozinke("");
        }
    }

    return (
        <div>
            <h2>Create your account!</h2>
            <form onSubmit={provjeriPosalji} className="forme">

                <Input type="text" name = "name" value={signUp_podaci.name} onChange={promjenaPodataka}
                    placeholder="Your name" style={{ width: '25%' }} />

                <Input type="text" name ="lastName" value={signUp_podaci.lastName} onChange={promjenaPodataka}
                    placeholder="Your last name" style={{ width: '25%' }} />

                <Input type="text" name="userName" value={signUp_podaci.userName} onChange={promjenaPodataka}
                    placeholder="Username" style={{ width: '25%' }}/>

                <Input type="email" name="email" value={signUp_podaci.email} onChange={promjenaPodataka}
                    placeholder="Email" style={{ width: '25%' }} />

                <Input.Password name="password" value={signUp_podaci.password} onChange={promjenaPodataka}
                    placeholder="Password" style={{ width: '25%' }}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                <Input.Password name="confirmPassword" value={confirmPassword} onChange={promjenaPodataka}
                    placeholder="Confirm password" style={{ width: '25%' }}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default Signup;
