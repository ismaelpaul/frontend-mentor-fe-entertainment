import { NewBookmark } from '../redux/features/entertainment/entertainmentSlice';
import axios, { AxiosRequestConfig } from 'axios';
import { toast } from 'react-toastify';

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
	try {
		const response = await entertainmentApi.get('/entertainments');
		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const getAllBookmarkeds = async () => {
	try {
		const response = await entertainmentApi.get('/bookmarks');
		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const addBookmark = async (newBookmark: NewBookmark) => {
	try {
		const response = await entertainmentApi.post('/bookmarks', newBookmark);
		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const deleteBookmark = async (id: string) => {
	try {
		const response = await entertainmentApi.delete(`/bookmarks/${id}`);

		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const getSingleEntertainment = async (id: string) => {
	try {
		const response = await entertainmentApi.get(`/entertainments/${id}`);

		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const registerUser = async (userData: UserData) => {
	try {
		const response = await entertainmentApi.post('/user/register', userData);

		if (response.statusText === 'OK') {
			toast.success('User registered successfully!');
		}

		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const loginUser = async (userData: UserData) => {
	try {
		const response = await entertainmentApi.post('/user/login', userData);
		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const getLoginStatus = async () => {
	try {
		const response = await entertainmentApi.get('/user/loggedin');
		return response.data;
	} catch (error: any) {
		return error.response.data.message;
	}
};

export const logoutUser = async () => {
	try {
		await entertainmentApi.get('/user/logout');
	} catch (error: any) {
		return error.response.data.message;
	}
};
