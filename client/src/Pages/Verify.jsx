import { Input, Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import appLogo from '../pic/logo-as1.png'
import "../App.css"

function Verify() {
    const nav = useNavigate();
    let randomNumber;

    const [insertNumber, setNumber] = useState(0)

    function newNumber(event) {
        const [name, value] = event.target
        setNumber(value);
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
        <div id="verify">
            <img src={appLogo} style={{ width: "250px", height: "auto", margin: "20px;" }} />
            <h1>Thank you for signing up!</h1>
            <h2>To complete your registration, please verify your email address.</h2>

            <Input type='number' name="insertNumber" value={insertNumber} onChange={newNumber}
                placeholder="000000" style={{ width: '25%' }} />

            <Button type="primary" style={{ backgroundColor: "#e91e63" }} onClick={checkNumbers}>Verify</Button>

            <p>Instructions:
                <ol>
                    <li>Check your inbox for an email from Adapt Schedule.</li>
                    <li>Open the email and click on the verification link provided.</li>
                    <li>If you can&#39;t find the email in your inbox, please check your spam or junk folder.</li>
                </ol>
            </p>

            <p>
                Ensure that you&#39;re using the latest sent to you.
                If you encounter any issues, please contact our support team at adaptSchedule_support@email.com.
            </p>

            <Button type="default" onClick={sendEmail}>Resend code</Button>

        </div>
    )
}

export default Verify