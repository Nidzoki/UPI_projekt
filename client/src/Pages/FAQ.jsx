import '../App.css'
import { useState } from 'react';
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Button } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"

function Faq() {
  const [paragraph, setVisibility] = useState({});

  const toggle = (section) => {
    setVisibility((prevVisibleContent) => ({
      ...prevVisibleContent,
      [section]: !prevVisibleContent[section],
    }));
  };


  return (
    <div>
      <Header />
      <div id="faqTijelo">
        <h1>Frequently asked questions</h1>
        <h2>General Information: </h2>
        <Button icon={<PlusOutlined />} onClick={() => toggle('content')}> What is the Adapt Schedule about? </Button>
        {paragraph['content'] && (
          <p>Adapt Schedule is your go-to online platform for effortless schedule management.
            Tailor your schedules to your liking, seamlessly collaborate with friends, family, or colleagues,
            and stay organized with customizable notifications and reminders for important dates and tasks.
          </p>
        )}

        <Button icon={<PlusOutlined />} onClick={() => toggle('team')}> Who is behind the product and company? </Button>
        {paragraph['team'] && (
          <p>We are a team of four college students dedicated to crafting the best possible experience on this website.
            To learn more about our journey, values and stories, visit our <Link to="/aboutus">About Us</Link> page.
          </p>
        )}


        <h2>Account and Registration:</h2>

        <Button icon={<PlusOutlined />} onClick={() => toggle('account')}> How do I create an account? </Button>
        {paragraph['account'] && (
          <p>Creating an account is a breeze! Simply visit our <Link to="/signup">Sign Up page</Link> or click the button in the upper navigation to get started on your journey with us.</p>
        )}

        <Button icon={<PlusOutlined />} onClick={() => toggle('password')}> What should I do if I forget my password? </Button>
        {paragraph['password'] && (
          <p> Changing your password is super easy.You can update it effortlessly either in <Link to="/login"> Login page </Link> or within your settings.</p>
        )}

        <h2>Usage and Features:</h2>

        <Button classname="faqBotun" icon={<PlusOutlined />} onClick={() => toggle('functionalities')}> What functionalities does the Adapt Schedule offer? </Button>
        {paragraph['functionalities'] && (
          <p>Adapt Schedule offers you to: personalize scheduling to meet your unique needs and preferences, collaborate with friends, family, or colleagues on shared schedules,
            set personalized notifications and reminders for important dates or tasks, intuitive and easy-to-navigate interface for efficient schedule management and 
            Effectively manage tasks with features such as deadlines, priorities, and completion tracking.
          </p>
        )}

        <Button icon={<PlusOutlined />} onClick={() => toggle('tips')}> Are there any shortcuts or tips for efficient use? </Button>
        {paragraph['tips'] && (
          <p></p>
        )}


        <h2>Technical Issues: </h2>

        <Button icon={<PlusOutlined />} onClick={() => toggle('requirements')}> Are there system requirements? </Button>
        {paragraph['requirements'] && (
          <p> Only a reliable internet connection is necessary and email adress.</p>
        )}

        <Button icon={<PlusOutlined />} onClick={() => toggle('problem')}> What do I do if I encounter a technical problem? </Button>
        {paragraph['problem'] && (
          <p>Feel free to reach out to us at AdaptSchedule_support@gmail.com if you encounter any issues or
            have questions about your experience on our website. We aim to respond within 1 to 2 days to ensure a prompt and helpful resolution.</p>
        )}


        <h2>Privacy and Security: </h2>

        <Button icon={<PlusOutlined />} onClick={() => toggle('3parities')}> Is my information shared with third parties? </Button>
        {paragraph['3parities'] && (
          <p>We want to assure you that we do not share any of your information with third parties. Your privacy and data security are of utmost importance to us.</p>
        )}

        <Button icon={<PlusOutlined />} onClick={() => toggle('protection')}> How is my data protected? </Button>
        {paragraph['protection'] && (
          <p>We prioritize the protection of your data.
            Our platform employs robust security measures, including encryption and secure protocols, to safeguard your information and ensure a secure user experience.
            Rest assured, your data is handled with the utmost care and diligence.</p>
        )}


        <h2>Support and Contact Information: </h2>

        <Button icon={<PlusOutlined />} onClick={() => toggle('support')}> How can I contact customer support? </Button>
        {paragraph['support'] && (
          <p>Should you need assistance or have question that are not covered here, we are here to help. 
            Feel free to reach out via email at AdaptSchedulesupport@.com, and we&#39;ll address your concerns and provide the assistance you need.</p>
        )}

        <Button icon={<PlusOutlined />} onClick={() => toggle('response')}> What is the response time from customer support? </Button>
        {paragraph['response'] && (
          <p>Our goal is to provide timely assistance. 
            While response times may vary based on the volume of inquiries, we strive to address your concerns as quickly as possible. 
            Typically, you can expect a response from our customer support team within 24 to 48 hours.</p>
        )}

        <Button icon={<PlusOutlined />} onClick={() => toggle('forums')}> Are there user forums or communities for additional help? </Button>
        {paragraph['forums'] && (
          <p>While Adapt Schedule is in its alpha state, we currently do not have user forums or large communities. 
            However, our team is actively working on enhancing the platform, and we look forward to expanding support resources, including forums, as we progress. 
            In the meantime, feel free to reach out to our customer support for any assistance you may need.</p>
        )}

      </div>

      <Footer />

    </div>


  )
}

export default Faq