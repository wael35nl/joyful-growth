import React, { useState, useEffect } from 'react';

import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Coaching from './pages/Coaching';
import Mindset from './pages/Mindset';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Footer from './layout/Footer';

const App = () => {

  const [page, setPage] = useState(sessionStorage.getItem('currentPage') || 'home');

  useEffect(() => {
    sessionStorage.setItem('currentPage', page);
  }, [page]);

  return (
    <div className='container'>

      <Navbar
        page={page}
        setPage={setPage}
      />

      {
        page === 'about' ?
          <About />
          : page === 'coaching' ?
            <Coaching />
            : page === 'mind' ?
              <Mindset />
              : page === 'course' ?
                <Courses />
                : page === 'contact' ?
                  <Contact />
                  :
                  <Home />
      }

      <Footer />

    </div>
  );
}

export default App;