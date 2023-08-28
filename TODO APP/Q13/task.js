// ... other imports ...

app.post('/tasks', async (req, res) => {
    const { text, done } = req.body;
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
  
  app.put('/tasks/:id', async (req, res) => {
    const { text, done } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Task text is required.' });
    }
  
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { text, done },
        { new: true }
      );
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the task.' });
    }
  });
  
  // ... other routes ...
  