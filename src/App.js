import {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import Landing from './components/Landing';
import Register from './pages/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import {UserProvider} from './UserContext';

function App() {
  const [user, setUser] = useState({
		id: null,
		isAdmin: null
	});

	const unsetUser = () => {
		localStorage.clear();
	};

  return (
    <>
    <Router>
      <AppNavbar/>
        <Container>
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/register" element={<Register />}/>
          </Routes>
        </Container>
    </Router>
    </>
  );
}

export default App;
