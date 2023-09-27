import './App.css';
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BottomNavbar from './pages/BottomNavbar';
import List from './pages/List';
import Detail from './pages/Detail';
import AuthorDetail from './pages/AuthorDetail';




function App() {

  return (
    <BrowserRouter basename='/porject'>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* home페이지가 기본으로 제일 처음 보일 페이지라서 경로 설정 */}
          <Route path='/List' element={<List />} />
          <Route path='/Detail' element={<Detail />} />
        </Routes>
      </main>
      <BottomNavbar />
      {/* 모든 페이지에서 보여야하는 부분이기에 넣어주기 */}
    </BrowserRouter>
  );
}

export default App;
