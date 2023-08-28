export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingTask, setEditingTask] = useState(null);
    const [editedText, setEditedText] = useState('');
    const [showCompleted, setShowCompleted] = useState(false); // Track the display of completed tasks
  
    // ... other code ...
  
    const completedTasks = tasks.filter((task) => task.done);
  
    // ... other code ...
  
    return (
      <div className={styles.container}>
        {/* ... other JSX ... */}
        <div>
          <button onClick={() => setShowCompleted(!showCompleted)}>
            {showCompleted ? 'Hide Completed' : 'Show Completed'}
          </button>
          {showCompleted && (
            <ul className={styles.completedTaskList}>
              {completedTasks.map((task) => (
                <li key={task._id} className={styles.completedTaskItem}>
                  <span>{task.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
  