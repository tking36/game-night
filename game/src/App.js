import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './screens/Home';
import AddScreen from './screens/AddScreen';
import ToolsScreen from './screens/ToolsScreen';

function App() {
  return (
   <Router>
    <main>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddScreen />} />
          <Route path="/tools" element={<ToolsScreen />} />
        </Routes>
      </Container>
    </main>
   </Router>
  );
}

export default App;
