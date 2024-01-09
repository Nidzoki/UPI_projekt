import '../App.css'
import appLogo from "../pic/logo-as1.png"
import { Button } from "antd"
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import Header from "../components/Header"

function HomePage() {

  return (
    <div className='homePage'>
      <Header/>
      
      <div id='zagljavlje'>
        <img src={appLogo} className="logoSlika" />
        <h2>Seize control of your time with our schedule app – where planning meets simplicity!</h2>
        <h3>Sign up, it&#39;s free!</h3>
        <Link to="/signup">
          <Button type="primary" style={{ backgroundColor: "#E0E1DD", color: "black" }}>Sign up!</Button>
        </Link>
      </div>

      <div id="tijelo">
        <div className='funkcionalnosti'>

          <div className="funkcionalnosti-container">
            <h2>Personalized Scheduling</h2>
            <p>Tailor your schedule to fit your unique lifestyle.
              Whether you are a student, professional, or a busy parent, Adapt Schedule adapts to your needs.</p>
          </div>

          <img className="funkcionalnosti-slike" src="https://img.freepik.com/free-vector/personal-settings-concept-illustration_114360-2251.jpg?w=2000" alt="woman schedualing" />
        </div>

        <div className='funkcionalnosti'>
          <img className="funkcionalnosti-slike" src="https://www.graphicpear.com/wp-content/uploads/2022/11/Time-Management-Illustration.jpg" alt="student studying" />
          <div className="funkcionalnosti-container">
            <h2>Smart Time Management</h2>
            <p>Our intelligent algorithm suggests optimal time slots for your tasks based on priorities,
              deadlines, and your energy levels.
            </p>
          </div>
        </div>

        <div className='funkcionalnosti'>
          <div className="funkcionalnosti-container">
            <h2>Collaborative Planning</h2>
            <p>Easily coordinate with friends, family, or colleagues. Share schedules, set group deadlines, and stay in sync effortlessly.</p>
          </div>

          <img className="funkcionalnosti-slike" src="https://i.pinimg.com/originals/6b/6d/84/6b6d84218f8d85d76266c7d1c71074e9.png" alt="co-op" />
        </div>

        <div className='funkcionalnosti'>
          <img className="funkcionalnosti-slike" src="https://img.freepik.com/free-vector/push-notifications-concept-illustration_114360-4730.jpg" alt="notifications" />
          <div className="funkcionalnosti-container">
            <h2>Notifications and Reminders</h2>
            <p>Never miss an important meeting or deadline again. Receive timely reminders and notifications to keep you on track.</p>
          </div>
        </div>
        
      </div>

      <Footer />

    </div>


  )
}

export default HomePage