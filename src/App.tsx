import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />}></Route>
			<Route path="/signup" element={<SignUp />}></Route>
		</Routes>
	);
}

export default App;
