import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching tasks.');
  }
};

export const createTask = async (text) => {
  try {
    const response = await axios.post(`${API_URL}/tasks`, { text });
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while creating a task.');
  }
};
