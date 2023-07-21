import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
//import { Routes, Route } from 'react-router-dom'  
//import { BrowserRouter as Router, Routes , Route, useParams } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
