import './App.css';
import Footer from './components/footer';
import Header from './components/header';
// import Main from './components/Main';
import Main from './pages/main';
import Login from './pages/login';
import Cart from './pages/cart';
import Mypage from './pages/mypage';
import CategoryNew from './pages/categoryNew';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/categorynew' element={<CategoryNew />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/mypage' element={<Mypage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
