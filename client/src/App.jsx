import React ,{useEffect, useState } from 'react'

import './App.css'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:8081/users")
    .then((response) => response.json())
    .then(data =>{
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
        <p key={i}>ID: {data.ID}, Name: {data.name}, Surname: {data.surname}</p>
      )
      )
    }
    </div>
    
  )
}

export default App
