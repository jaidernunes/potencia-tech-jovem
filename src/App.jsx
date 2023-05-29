import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import RegisterStudent from './pages/RegisterStudent';
import RegisterSchool from './pages/RegisterSchool';
import Dashboard from './pages/Dashboard';
import Ava from './pages/Ava';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/estudante/registro" element={<RegisterStudent />} />
      <Route path="/estudante/cursos" element={<Ava />} />
      <Route path="/escola/registro" element={<RegisterSchool />} />
      <Route path="/escola/acompanhamento" element={<Dashboard />} />
      <Route exact path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App;
