import {UserProvider} from './UserContext';
import { ModalState } from './ModalContext';
import {useEffect, useState} from 'react';
import {Container, Modal} from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import Landing from './components/Landing';
import UserBox from './components/userBox'
import Products from './pages/Products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Logout from './pages/Logout';

function App() {
  const [user, setUser] = useState({
		id: null,
		firstName: null,
		lastName: null,
		mobile: null,
		email: null,
		isAdmin: null
	});

	const unsetUser = () => {
		localStorage.clear();
	};

	const [openModal, setOpenModal] = useState(false)

	const handleClose = () => setOpenModal(false);

  useEffect(() => {
		fetch('http://localhost:4000/users/getUserDetails',{
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		}).then(res => res.json())
		.then(data =>{
			if(typeof data._id !== "undefined"){
				setUser({
					id: data._id,
					firstName: data.firstName,
					lastName: data.lastName,
					mobile: data.mobileNo,
					email: data.email,
					isAdmin: data.isAdmin
				});
			} else {
				setUser({
					id: null,
					firstName: null,
					lastName: null,
					mobile: null,
					email: null,
					isAdmin: null
				})
			}
			
		})
	}, [])


  return (
    <>
    <UserProvider value={{user, setUser, unsetUser}}>
	<ModalState value={{openModal, setOpenModal}}>
    <Router>
      <AppNavbar/>
	  {/* <Container> */}
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/products" element={<Products />}/>
			<Route exact path="/logout" element={<Logout/>}/>
          </Routes>
		  
        {/* </Container> */}
    
		<Modal 
			show={openModal}
			onHide={handleClose}
			contentClassName="custom-modal">
					<UserBox/>
			</Modal>
        
	</Router>
	</ModalState>
    </UserProvider>
    </>
  );
}

export default App;
