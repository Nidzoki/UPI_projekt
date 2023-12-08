import { Input, Button } from 'antd';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import appLogo from '../pic/logo-as1.png'
import "../App.css"

function Verify() {
    const nav = useNavigate();
    let randomNumber;

    const [insertNumber, setNumber] = useState(0)

    function newNumber(event) {
        setNumber(event.target.value);
    }

    function checkNumbers() {
        if (insertNumber == randomNumber) {
            nav("/pocetna");
        }
    }

    function sendEmail() {
        randomNumber = Math.floor(100000 + Math.random() * 900000).toString()
        //pošalji mail sa kodom
    }

    return (
        <div id="verify" style={{ padding: "20px" }}>
             <Link to="/" style={{position:"absolute", top:"10px", left:"10px"}}>
                <Button style={{cursor: 'pointer'}} icon={<HomeOutlined/>}>Go to Home page</Button>
            </Link>

            <img src={appLogo} style={{ width: "250px", height: "auto", margin: "20px;" }} />
            <h1>Verify your email</h1>
            <h2>To complete your registration, please verify your email address.</h2>

            <Input type='number' name="insertNumber" value={insertNumber} onChange={newNumber}
                placeholder="000000" style={{ width: '20%' }} /><br />

            <Button type="primary" style={{ backgroundColor: "#e91e63", margin: "20px" }} onClick={checkNumbers}>Verify</Button>

            <p>Check your inbox for an email from Adapt Schedule. In that email, you will get a code that you will paste here.</p>
            <label>If you can&#39;t find the email in your inbox, please check your spam or junk folder.</label>
            <label>If you encounter any issues, please contact our support team at adaptSchedule_support@email.com.</label><br />

            <Button type="default" onClick={sendEmail} style={{ margin: "20px" }}>Resend code</Button>

        </div>
    )
}

export default Verify