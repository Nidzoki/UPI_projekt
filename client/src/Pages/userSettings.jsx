import { useState } from "react";
import { Input, Button, DatePicker, Modal } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, LogoutOutlined } from '@ant-design/icons';
import "../App.css";
import NavLeft from "../components/navLeft"
import { useNavigate } from "react-router-dom";


function UserSettings() {
    const [imeKorisnika, setIme] = useState("");
    const nav = useNavigate();
    const [deleteAcc, setDelete] = useState(false)
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        bday: "",
        email: "",
        password: ""
    });

    const [confirmPassword, setConfirmPassword] = useState("")

    function editData(event) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });

        if (name == "confirmPassword") {
            setConfirmPassword(value)
        }
    }

    const provjeriPosalji = ()=> {
        if (jeLiPopunjen(user) && confirmPassword != null) {
            if (confirmPassword == user.password) {
                if (confirmPassword.length >= 8 && imaLiBroj(confirmPassword)) {
                    //spremi podatke 
                    setIme(user.name)
                }
            }
            else {
                alert("Passwords do not match!")
                setConfirmPassword("");
            }
        }
    }

    function logOut() {
        //obriši token
    }

    function imaLiBroj(tekst) { //provjerava li ima li tekst (lozinka brojeva)
        return /\d/.test(tekst);
    }

    function jeLiPopunjen(obj) {
        return Object.values(obj).every(element => element !== null); //vraća false ako je objekt prazan, provjeravamo je li korisnik unio podatke
    }

    function handleCancel() {
        setDelete(false)
    }

    function handleDelete() {
        //obriši račun i token
        nav("/");
        setDelete(false)
    }

    return (
        <div id="userSettings">
            <NavLeft id="navigacijaLijeva" />

            <div id="navUpperUser">
                <Button icon={<LogoutOutlined />} onClick={logOut} style={{ backgroundColor: "#E0E1DD" }}> Logout</Button>
                <Button style={{ backgroundColor: "red", border: "0px", color: "white", marginLeft: "10px" }}
                    onClick={() => { setDelete(true) }}>
                    Delete account
                </Button>
            </div>
            <div style={{marginTop: "80px"}}>
                <Modal
                    title="Are you sure you want to delete your account? "
                    open={deleteAcc}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="addNew" type="primary" onClick={handleDelete}> Yes</Button>,
                        <Button key="cancel" onClick={handleCancel}> No </Button>
                    ]} />

                <h2>Welcome {imeKorisnika}</h2>
                <div id="settingsTijelo">
                    <p>Your name: </p>
                    <Input type="text" name="name" value={user.name} onChange={editData}
                        placeholder="Change name" />



                    <p>Your last name: </p>
                    <Input type="text" name="lastName" value={user.lastName} onChange={editData}
                        placeholder="Change last name" />



                    <p>Your birthday: </p>
                    <DatePicker
                        format="DD. MM. YYYY"
                        placeholder="Select Birthdate"
                        value={user.bday}
                        onChange={editData}
                    />

                    <p>Your email: </p>
                    <Input type="email" name="email" value={user.email} onChange={editData}
                        placeholder="Change email" />

                    <p>Change password: </p>
                    <Input.Password name="password" value={user.password} onChange={editData}
                        placeholder="Change password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                    <p>Confirm password: </p>
                    <Input.Password name="confirmPassword" value={confirmPassword} onChange={editData}
                        placeholder="Confirm password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />

                </div> <br/>
                <Button type="primary" onClick={provjeriPosalji}
                    style={{ backgroundColor: "#E0E1DD", color: "black", height: "40px", inlineSize: "200px", fontSize: "17px" }}> Save changes</Button>
            </div>
        </div>
    )
}

export default UserSettings;