import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerPage from '../pages/user/PlayerPage';
import Register from '../pages/Register';
import Login from '../pages/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerPage />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
