import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerPage from '../pages/user/PlayerPage';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Navigation from './Navigation';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<PlayerPage />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register register={true} />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
