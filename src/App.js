
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
// import Home './Pages/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
