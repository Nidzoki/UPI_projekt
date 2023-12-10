
import './App.css'
import './rasp/mjesecni_rasp.jsx'
import Mjesecni from './rasp/mjesecni_rasp.jsx'
import './rasp/tjedni_rasp.jsx'
function App() {
  
  return (
    <>
      <div>
        {/*<button onClick={Tjedni}> vodi na tjedni </button>
        //<button onClick={Mjesecni}> vodi na mjesecni</button>*/}
        <Mjesecni/>
      </div>
    </>
  )
}

export default App
