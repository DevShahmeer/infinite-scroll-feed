import React from 'react';
import './App.css';
import PostList from './components/PostList';

function App() {
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
    </div>
  );
}

export default App;
