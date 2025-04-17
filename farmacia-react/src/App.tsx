import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ListaTemas from './components/temas/listatemas/ListaTemas';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/temas" element={<ListaTemas />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

