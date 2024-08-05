import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage.component';
import Home from './Pages/Home/Home';
import AddPirate from "./components/AddPirate/AddPirate.component";
import Details from './Pages/Details/Details.component';
import Register from './Pages/auth/Register/Register'
import Login from './Pages/auth/Login/Login'
import './App.css';
import Header from './Pages/Header/Header';

function App() {
  const token = !!localStorage.getItem("token");
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/" element={<Home />} />
        {token &&<Route path='/pirates' element={<MainPage />} />}
        {token && <Route path="/new" element={<AddPirate />} />}
        {token && <Route path="/pirate/:id" element={<Details />} />}
      </Routes>
     
    </div>
  );
}

export default App;
