import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import LogIn from "./pages/LogIn";


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

      {
        backendData.map((data, i) => (
          <p key={i}>ID: {data.ID}, Name: {data.Name}, Surname: {data.Surname}</p>
        ))}

      <Router>
        <Header/>
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<HomePage />} />

          {/* Route for the sign-in page */}
          <Route path="/signup" element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
