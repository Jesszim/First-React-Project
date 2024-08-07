import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/navbar';
import Home from './pages/Home/home';
import Comments from './pages/comments/comments';
import './App.css';

function App() {
  return (
<Router>
<Nav />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/comments" element={<Comments />}/> 
   
      </Routes>
</Router>
  );
}

export default App;
