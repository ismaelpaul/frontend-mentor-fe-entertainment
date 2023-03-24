import { NewBookmark } from '../redux/features/entertainment/entertainmentSlice';
import axios, { AxiosRequestConfig } from 'axios';

interface UserData {
	email: string;
	password: string;
}

interface AxiosConfig extends AxiosRequestConfig {
	credentials?: string;
}

const baseUrl = import.meta.env.VITE_BASE_URL;

const entertainmentApi = axios.create({
	baseURL: `${baseUrl}/api`,
	withCredentials: true,
	credentials: 'include',
} as AxiosConfig);

export const getAllEntertainments = async () => {
	const response = await entertainmentApi.get('/entertainments');

	return response.data;
};

export const getAllBookmarkeds = async () => {
	const response = await entertainmentApi.get('/bookmarks');

	return response.data;
};

export const addBookmark = async (newBookmark: NewBookmark) => {
	const response = await entertainmentApi.post('/bookmarks', newBookmark);

	return response.data;
};

export const deleteBookmark = async (id: string) => {
	const response = await entertainmentApi.delete(`/bookmarks/${id}`);

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

export const getLoginStatus = async () => {
	const response = await entertainmentApi.get('/user/loggedin');

	return response.data;
};
