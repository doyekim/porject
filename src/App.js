import './App.css';
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BottomNavbar from './pages/BottomNavbar';
import List from './pages/List';
import Detail from './pages/Detail';




function App() {

  return (
    <BrowserRouter>
      <main>
        <Home />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/List' element={<List />} />
          <Route path='/Detail' element={<Detail />} />
        </Routes>
      </main>
      <BottomNavbar />
    </BrowserRouter>
  );
}

export default App;
