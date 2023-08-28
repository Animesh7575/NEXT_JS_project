export default function Home() {
    // ... other code ...
  
    const handleDeleteTask = async (taskId) => {
      try {
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(updatedTasks);
  
        // Delete the task from the server
        await axios.delete(`${API_URL}/tasks/${taskId}`);
      } catch (error) {
        console.error(error);
      }
    };
  
    // ... other code ...
  }
  