import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import LogIn from "./Pages/LogIn";
import Pocetna from "./Pages/Pocetna";
import Verify from "./Pages/Verify"
import FAQ from "./Pages/FAQ"
import Payment from './Pages/Payment';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import ChangePassword from "./Pages/ChangePassword"
import MonthSchedule from "./Pages/MonthSchedule"


import './App.css'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        setBackendData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(backendData);

  return (

    <div>

      {/* {
        backendData.map((data, i) => (
          <p key={i}>ID: {data.ID}, Name: {data.Name}, Surname: {data.Surname}</p>
        ))} */}

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path="/pocetna" element={<Pocetna />}/>
          <Route path="/verify" element={<Verify />}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/changepassword" element={<ChangePassword />}/>
          <Route path="/monthSchedule" element={<MonthSchedule/>}/>
        </Routes>
      </Router>
    </div>

  )
}

export default App
