import './App.css';
import Footer from './components/footer';
import Header from './components/header';
// import Main from './components/Main';
import Main from './pages/main';
import CategoryNew from './pages/categoryNew';
import About from './pages/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/categorynew' element={<CategoryNew />} />
                <Route path='/About' element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
