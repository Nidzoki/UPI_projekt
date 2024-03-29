import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import LogIn from "./Pages/LogIn";
import Pocetna from "./Pages/Pocetna";
import FAQ from "./Pages/FAQ"
import Payment from './Pages/Payment';
import AboutUs from './Pages/AboutUs';
import MonthSchedule from "./Pages/MonthSchedule"
import WeekSchedule from './Pages/WeekSchedule';
import UserSettings from './Pages/userSettings';



import './App.css'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8080/users")
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
          <Route path="/pocetna" element={<Pocetna />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/monthSchedule" element={<MonthSchedule />} />
          <Route path="/weekSchedule" element={<WeekSchedule/>}/> 
          <Route path="/userSettings" element={<UserSettings/>}/> 
        </Routes>
      </Router>
    </div>

  )
}

export default App
