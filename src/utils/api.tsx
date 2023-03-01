import axios from 'axios';

const entertainmentApi = axios.create({
	baseURL: 'http://localhost:9090/api',
});

export const getAllEntertainments = async () => {
	const response = await entertainmentApi.get('/entertainments');

	return response.data;
};
