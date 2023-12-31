import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Type from './Components/Type';
import Navbar from './Components/Navbar';
import ProfilePage from './Components/ProfilePage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/type" element={<Type/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
