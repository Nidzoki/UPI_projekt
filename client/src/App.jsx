import React ,{useEffect, useState } from 'react'

import './App.css'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api")
    .then((response) => response.json())
    .then(data =>{
      setBackendData(data);
    })
  }, []);

  console.log(backendData);

  return (
    
    <>
    {
        (typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ):(
          backendData.users.map((user, i) =>{
            return <p key={i}>{user}</p>
          })
        )
      }
    </>
    
  )
}

export default App
