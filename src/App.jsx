import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import RegisterStudent from './pages/RegisterStudent';
import RegisterSchool from './pages/RegisterSchool';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/estudante/registro" element={<RegisterStudent />} />
      <Route path="/escola/registro" element={<RegisterSchool />} />
      <Route path="/escola/acompanhamento" element={<Dashboard />} />
      <Route exact path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
