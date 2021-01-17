import React from 'react';
import images from './images';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased text-black bg-blue-100">
      <div 
        className="bg-cover bg-no-repeat h-96 p-10 flex justify-between"
        style={
          {
            backgroundImage: `url(${images.header})`
          }
        }
      >
        <div className="pr-8">
          <img src={images.logo} alt="Logo do Site"></img>
        </div>
        <div className="text-white font-serif text-2xl font-bold flex flex-grow justify-evenly max-w-6xl">
          <a href="/">Tinga</a>
          <a href="/">Tiringa</a>
          <a href="/">Tiringa Tinga</a>
        </div>
      </div>
    </div>
  );
}

export default App;
