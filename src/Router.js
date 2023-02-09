import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, NavBar, Contact, About, Form } from './components';


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;