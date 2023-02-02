import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';

const App = () => {
  return (
    <div className="app">
      <Link to='/'>Main</Link>
      <Link to='about'>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageLazy />} />
          <Route path='/' element={<MainPageLazy />}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;