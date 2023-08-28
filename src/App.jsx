import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';

function App() {
  const [ showScrollButton, setShowScrollButton ] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo( { top: 0, behavior: 'smooth' })
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scroll Feed</h1>
      </header>
      <main>
        <PostList />
      </main>
      <footer className="App-footer">
        <p>Scroll down to load more posts...</p>
      </footer>
      {showScrollButton && (
        <button className="scroll-button" onClick={scrollToTop}>
        ↑
      </button>
      )}
    </div>
  );
}

export default App;
