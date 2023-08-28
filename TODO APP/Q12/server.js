app.post('/tasks', async (req, res) => {
    const { text, done } = req.body; // Receive both text and done from the request body
    if (!text) {
      return res.status(400).json({ error: 'Task text is required.' });
    }
  
    try {
      const newTask = new Task({ text, done });
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while adding the task.' });
    }
  });
  