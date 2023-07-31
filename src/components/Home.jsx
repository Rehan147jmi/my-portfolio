import React from 'react';
import Model from './Model';

const Home = () => {
  return (
    <div className="home container">
      <div className='wrap '>
        <div className='mb-100' >
         <h2 className='intro '>
        <span id='introSpan'> Hi</span>, I'm Rehan<br></br> a Full Stack Developer and Web Designer
        </h2>
        </div>
       <div className='modelWrap'>
       <Model className="model"/>
       </div>
      
      </div>
     
    </div>
  )
}

export default Home;