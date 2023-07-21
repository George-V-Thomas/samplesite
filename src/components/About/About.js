import './About.css'
import PageHeader from '../../components/PageHeader/PageHeader'


const About = () => {
    return (
        <div className="About"> 
        <div>
            <PageHeader title={'About..'}/>
        </div>
        <p>I am George Thomas, a Software Developer based in Kerala State, India. I am working in the
            Identity and Access Management domain and passionate about sharing the knowledge.
            Those who are interested to join the free online sessions on IAM, please send a mail to me by using the information in the Contact tab.
            <br/>Timings: Every Friday 9pm IST
        </p>
        </div>
      );    
}
export default About;