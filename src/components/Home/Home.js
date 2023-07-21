import './Home.css'
import maldives from '../../img/maldives.jpg'

const Home = () => {
    return (
        <div className="Home"> 
            <div className="Container">
                <h1>Welcome to Encourageat site!</h1>
            </div>
            <div className="Maldivesimg">
                <img src={maldives} alt="maldives image"></img>
            </div>
        </div>
      );    
}
export default Home;