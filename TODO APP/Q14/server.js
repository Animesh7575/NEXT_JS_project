// ... other imports ...

app.delete('/tasks/:id', async (req, res) => {
    try {
      await Task.findByIdAndRemove(req.params.id);
      res.json({ message: 'Task deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the task.' });
    }
  });
  
  // ... other routes ...
  