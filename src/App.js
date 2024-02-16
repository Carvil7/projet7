import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/about';
import Error404 from './pages/Error404/error404';
import Home from './pages/Home/home';
import Lodgement from './pages/Lodgement/lodgement';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodgement/:id" element={<Lodgement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
