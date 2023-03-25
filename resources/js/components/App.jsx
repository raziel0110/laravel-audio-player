import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerPage from '../pages/user/PlayerPage';
import Register from '../pages/Register';
import Login from '../pages/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayerPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
