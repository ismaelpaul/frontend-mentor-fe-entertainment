import axios from 'axios';
import { NewBookmark } from '../redux/features/entertainment/entertainmentSlice';

type UserData = {
	email: string;
	password: string;
};

const entertainmentApi = axios.create({
	baseURL: 'http://localhost:9090/api',
	withCredentials: true,
	credentials: 'include',
});

export const getAllEntertainments = async () => {
	const response = await entertainmentApi.get('/entertainments');

	return response.data;
};

export const getAllBookmarkeds = async () => {
	const response = await entertainmentApi.get('/bookmarks');
	console.log(response.data, '<<< response api getAllBookmarkeds');

	return response.data;
};

export const addBookmark = async (newBookmark: NewBookmark) => {
	console.log(newBookmark, 'newBookmark api');

	const response = await entertainmentApi.post('/bookmarks', newBookmark);
	console.log(response, '<<< response addbookmark');

	return response.data;
};

export const getSingleEntertainment = async (id: string) => {
	const response = await entertainmentApi.get(`/entertainments/${id}`);

	return response.data;
};

export const registerUser = async (userData: UserData) => {
	const response = await entertainmentApi.post('/user/register', userData);

	return response.data;
};

export const loginUser = async (userData: UserData) => {
	const response = await entertainmentApi.post('/user/login', userData);

	return response.data;
};
