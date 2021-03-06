import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import CheckOut from './components/CheckOut/CheckOut';
import NotFound from './components/Shared/NotFound/NotFound';
import Blog from './components/Blog/Blog';
import About from './components/About/About';


function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App
