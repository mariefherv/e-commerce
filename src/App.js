import {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import Landing from './components/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import Products from './pages/Products';
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

  useEffect(() => {
		fetch('http://localhost:4000/users/getUserDetails',{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		}).then(res => res.json())
		.then(data =>{
			// captures the data of whoever is logged in
			console.log(data)

			if(typeof data._id !== "undefined"){
				setUser({
					id: data._id,
					isAdmin: data.isAdmin
				});
			} else {
				setUser({
					id: null,
					isAdmin: null
				})
			}
			
		})
	}, [])

  return (
    <>
    <UserProvider value={{user, setUser, unsetUser}}>
    <Router>
      <AppNavbar/>
        <Container>
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/products" element={<Products />}/>
          </Routes>
        </Container>
    </Router>
    </UserProvider>
    </>
  );
}

export default App;
