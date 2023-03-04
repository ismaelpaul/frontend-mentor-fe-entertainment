import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<SignUp />}></Route>
			<Route
				path="/"
				element={
					<Nav>
						<Home />
					</Nav>
				}
			></Route>
		</Routes>
	);
}

export default App;
