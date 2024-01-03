import React from 'react';
import NavBar from './components/navBar';
import LogoSide from './components/logoSide'; 
import Contact from './components/Contact';

const Blog: React.FC = () => {
  return (
    <div>
      <div className='container'>
      <LogoSide />
      <Contact />
      <NavBar />
      </div>
 
      <div className='head-word'>unlock</div>
      <div className='next-word'>
        <p>the unexpected.</p>
      </div>
      <div className='bottom-word'>
        <p>some ramblings here and there</p>
      </div>
    </div>
  );
};

export default Blog;
