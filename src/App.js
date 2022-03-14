import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="react-router-demo-v6/" element={<Home/>}/>
        <Route path="react-router-demo-v6/about" element={<About/>}/>
        <Route path="react-router-demo-v6/contacts" element={<Contacts/>}/>
      </Routes>

    </div>
  );
}

export default App;
