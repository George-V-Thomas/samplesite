import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Contact/>
      <h>Welcome!</h>
    </div>
  );
}

export default App;
