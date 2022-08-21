import {UserProvider} from './UserContext';
import { ModalState } from './ModalContext';
import {useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import AppNavbar from './components/AppNavbar';
import Landing from './pages/Landing';
import UserBox from './components/userBox'
import Products from './pages/Products';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Interface from './pages/Interface';
import ViewOrders from './pages/ViewOrders';

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
	  {(user.isAdmin) ?
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/hello" element={<Interface />}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/dashboard/viewAllOrders" element={<ViewOrders/>}/>
			<Route exact path="/logout" element={<Logout/>}/>
			<Route exact path="/*" element={<Error/>}/>
          </Routes>
		  :
		  <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/products" element={<Products/>}/>
			<Route exact path="/logout" element={<Logout/>}/>
			<Route exact path="/*" element={<Error/>}/>
          </Routes>

	} 
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
