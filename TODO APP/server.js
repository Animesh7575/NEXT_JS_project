const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TaskSchema = new mongoose.Schema({
  text: String,
  done: Boolean,
});

const Task = mongoose.model('Task', TaskSchema);

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching tasks.' });
  }
});

app.post('/tasks', async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Task text is required.' });
  }

  try {
    const newTask = new Task({ text, done: false });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the task.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
