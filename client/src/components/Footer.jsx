import "../App.css"
import { Link } from "react-router-dom"


function Footer() {
  return (
    <div id='podnozje'>
      <div className="container">
        <div className="red">
          <div className="podnozje-stupac">
            <h4>Company</h4>
            <ul style={{ textAlign: "left" }}>
              <Link to="/aboutus"><li><a href="#">About us</a></li></Link>
              <li><a href="https://policies.google.com/privacy?hl=en-US">Privacy policy</a></li>
            </ul>
          </div>
          <div className="podnozje-stupac">
            <h4>Help</h4>
            <ul style={{ textAlign: "left" }}>
              <Link to="/faq"><li><a href="#">FAQ</a></li></Link>
              <Link to="/payment"><li><a href="#">Payment options</a></li></Link>
            </ul>
          </div>
          <div className="podnozje-stupac">
            <h4>Follow us</h4>
            <ul style={{ textAlign: "left" }}>
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://www.twitter.com">Twitter</a></li>
              <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <p>&copy;2023 AdaptScheduale | All Rights Reserved</p>
    </div>
  )
}

export default Footer;