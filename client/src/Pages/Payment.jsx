import '../App.css'
import Footer from "../components/Footer"
import Header from "../components/Header"
import {Link} from "react-router-dom"


function Payment() {

  return (
    <div id='payment'>
      <Header />
      <div id="sadrzaj">

        <div className="element">
          <h1>Free</h1>
          <h2>Get started fast, free forever</h2>
          <div>
            <h1>0€</h1>
            <button ><Link to="/signup" style={{color:"white"}}>Get started </Link></button>
          </div>
          <hr></hr>
          <div>
            <h4>Features:</h4>
            <div className="lista">
              <ol>
                <li>Make schedules</li>
                <li>Add events</li>
                <li>Add reminders</li>
              </ol>
            </div>
          </div>

        </div>

        <div className="element">
          <h1>Upgrade</h1>
          <h2>Widen your possibilities and enjoy</h2>
          <div>
            <h1>5€ / month</h1> 
            <button>Subscribe</button>
          </div>
          <hr></hr>
          <div>
            <h4>Extra features:</h4>
            <ol>
              <li>Connect with people</li>
              <li>Add palettes for events</li>
              <li>Themes for schedules </li>
            </ol>

          </div>

        </div>

      </div>

      <Footer />

    </div>


  )
}

export default Payment