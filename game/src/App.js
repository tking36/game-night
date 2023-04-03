import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
   <Router>
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </main>
   </Router>
  );
}

export default App;
