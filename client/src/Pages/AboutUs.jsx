import '../App.css'
import Footer from "../components/Footer"
import Header from "../components/Header"

function AboutUs() {

  return (
    <div>
      <Header />
      <div id="aboutus">
        <h1>About team UPIt ćemo se</h1>

        <div id="aboutusTijelo">
          <img src="https://img.freepik.com/free-photo/happy-young-business-team-four-people_1262-2127.jpg" alt="team"></img>
          <p>
            We&#39;re a tight-knit team of four individuals, each bringing a diverse set of skills to the table.
            When we set our sights on a goal, we ignite a collective fire of passion and determination. Despite our varying expertise,
            we work collaboratively to ensure that your experience is nothing short of exceptional. Our small but dynamic team is committed
            to delivering the best, leveraging our unique talents to make your journey with us truly outstanding.
          </p>
        </div>

      </div>

      <Footer />

    </div>


  )
}

export default AboutUs