import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import LogIn from "./pages/LogIn";
import Pocetna from "./Pages/Pocetna";
import Verify from "./Pages/Verify"


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
        </Routes>
      </Router>
    </div>

  )
}

export default App
