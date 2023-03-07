import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import BookmarkedPage from './pages/Bookmarked/BookmarkedPage';
import Home from './pages/Home/Home';
import MoviesPage from './pages/Movies/MoviesPage';
import TvSeriesPage from './pages/TvSeries/TvSeriesPage';

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
			<Route
				path="/movies"
				element={
					<Nav>
						<MoviesPage />
					</Nav>
				}
			></Route>
			<Route
				path="/tv-series"
				element={
					<Nav>
						<TvSeriesPage />
					</Nav>
				}
			></Route>
			<Route
				path="/bookmarked"
				element={
					<Nav>
						<BookmarkedPage />
					</Nav>
				}
			></Route>
		</Routes>
	);
}

export default App;
