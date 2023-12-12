import './Pages.css'
import Footer from "../components/Footer"
import Header from "../components/Header"
import { StarFilled } from '@ant-design/icons';

function Payment() {

  return (
    <div id='payment'>
      <Header />
      <div id="sadrzaj">

        <div id="free">
          <h1>Free</h1>
          <h2>Get started fast, free forever</h2>
          <div>
            <h1>0€</h1>
            <button>Get started free</button>
          </div>
          <hr></hr>
          <div>
            <h4>Free features:</h4>
            <div className="lista">
              <ol>
                <li>Make your schedule</li>
                <li>Add an event</li>
                <li>Notify me</li>
              </ol>
            </div>
          </div>

        </div>

        <div id="pay">
          <h1>Upgrade</h1>
          <h2>Widen your possibilities and enjoy</h2>
          <div>
            <h1>5€</h1> per month
            <button>Buy</button>
          </div>
          <hr></hr>
          <div>
            <h4>All free features, plus:</h4>
            <ol>
              <li>Make frineds</li>
              <li>Add special colors</li>
              <li>More themes</li>
            </ol>

          </div>

        </div>

      </div>

      <Footer />

    </div>


  )
}

export default Payment