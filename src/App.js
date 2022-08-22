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
import ViewAllOrders from './pages/ViewAllOrders';
import ProductView from './pages/ProductView';
import { CheckoutProvider } from './CheckoutContext';
import Checkout from './pages/Checkout';
import EditProducts from './pages/EditProducts';
import CreateProduct from './pages/CreateProduct';
import Profile from './pages/Profile';
import ViewOrderHistory from './pages/ViewOrderHistory';

function App() {
  const [checkout, setCheckout] = useState([])

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
		fetch('https://shrouded-bastion-22720.herokuapp.com/users/getUserDetails',{
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
	<CheckoutProvider value={{checkout, setCheckout}}>
    <Router>
      <AppNavbar/>
	  {(user.isAdmin) ?
          <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/hello" element={<Interface />}/>
            <Route exact path="/products" element={<Products/>}/>
			<Route exact path="/profile" element={<Profile/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/dashboard/viewAllOrders" element={<ViewAllOrders/>}/>
			<Route exact path="/dashboard/editProducts" element={<EditProducts/>}/>
			<Route exact path="/dashboard/editProducts/create" element={<CreateProduct/>}/>
			<Route exact path="/products/:productId" element={<ProductView/>}/>
			<Route exact path="/logout" element={<Logout/>}/>
			<Route exact path="/*" element={<Error/>}/>
          </Routes>
		  :
		  (user.id !== null) ?
		  <Routes>
		  	<Route exact path="/hello" element={<Interface />}/>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/products" element={<Products/>}/>
			<Route exact path="/orders" element={<ViewOrderHistory/>}/>
			<Route exact path="/logout" element={<Logout/>}/>
			<Route exact path="/profile" element={<Profile/>}/>
			<Route exact path="/products/:productId" element={<ProductView/>}/>
			<Route exact path="/checkout" element={<Checkout/>}/>
			<Route exact path="/*" element={<Error/>}/>
          </Routes>
		  :
		  <Routes>
            <Route exact path="/" element={<Landing />}/>
            <Route exact path="/products" element={<Products/>}/>
			<Route exact path="/logout" element={<Logout/>}/>
			<Route exact path="/*" element={<Error/>}/>
			<Route exact path="/products/:productId" element={<ProductView/>}/>
          </Routes>

	}

	{/* <Routes>
		<Route exact path="/" element={<Landing />}/>
        <Route exact path="/products" element={<Products/>}/>
		<Route exact path="/logout" element={<Logout/>}/>
		<Route exact path="/products/:productId" element={<ProductView/>}/>
		<Route exact path="/*" element={<Error/>}/>

		{(user.id !== null) 
			&& <Route exact path="/hello" element={<Logout/>}/>
			&& <Route exact path="/logout" element={<Logout/>}/>
		
			&& (user.isAdmin) ?
			<Route exact path="/dashboard" element={<Dashboard/>}/>
            && <Route exact path="/dashboard/viewAllOrders" element={<ViewAllOrders/>}/>
			:
			<Route exact path="/checkout" element={<Products/>}/>
		}
	</Routes> */}

		<Modal 
			show={openModal}
			onHide={handleClose}
			contentClassName="custom-modal">
					<UserBox/>
			</Modal>
        
	</Router>
	</CheckoutProvider>
	</ModalState>
    </UserProvider>
    </>
  );
}

export default App;
