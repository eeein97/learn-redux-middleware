import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import PostPage from './pages/PostPage';
import PostListPage from './pages/PostListPage';

function App() {
  return (
    <div className="App">
      <Counter />
      <Routes>
        <Route path='/' element={ <PostListPage />} />
        <Route path='/:id' element={ <PostPage />} />
      </Routes>
    </div>
  );
}

export default App;

