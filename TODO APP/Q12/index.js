const handleAddTask = async () => {
    if (newTask.trim() !== '') {
      try {
        const createdTask = await createTask({
          text: newTask,
          done: false, // Mark the task as incomplete when added
        });
        setTasks([...tasks, createdTask]);
        setNewTask('');
      } catch (error) {
        console.error(error);
      }
    }
  };
  