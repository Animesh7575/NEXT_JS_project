export const createTask = async (taskData) => {
    try {
      const response = await axios.post(`${API_URL}/tasks`, taskData);
      return response.data;
    } catch (error) {
      throw new Error('An error occurred while creating a task.');
    }
  };
  