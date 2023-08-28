export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTask, setEditingTask] = useState(null); // Track the task being edited
    const [editedText, setEditedText] = useState(''); // Track the edited text
  
    // ... other code ...
  
    const handleEditClick = (taskId, taskText) => {
      setEditingTask(taskId);
      setEditedText(taskText);
    };
  
    const handleEditChange = (e) => {
      setEditedText(e.target.value);
    };
  
    const handleSaveEdit = async (taskId) => {
      if (editedText.trim() !== '') {
        try {
          const updatedTasks = tasks.map((task) =>
            task._id === taskId ? { ...task, text: editedText } : task
          );
          setTasks(updatedTasks);
          setEditingTask(null);
          setEditedText('');
  
          // Send updated task text to the server
          // Implement this part using your API
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    // ... other code ...
  
    return (
      <div className={styles.container}>
        {/* ... other JSX ... */}
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li
              key={task._id}
              className={`${styles.taskItem} ${task.done ? styles.done : ''}`}
            >
              {editingTask === task._id ? (
                <>
                  <input
                    type="text"
                    value={editedText}
                    onChange={handleEditChange}
                  />
                  <button onClick={() => handleSaveEdit(task._id)}>Save</button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => handleToggleTask(task._id)}
                  />
                  <span>{task.text}</span>
                  <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
                  <button onClick={() => handleEditClick(task._id, task.text)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  