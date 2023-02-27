import { Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />}></Route>
		</Routes>
	);
}

export default App;
