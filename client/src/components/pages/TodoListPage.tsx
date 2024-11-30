import React, { useEffect, useState } from "react";
import { useTasks } from "../../features/tasks/useTasks"; // Hook to fetch tasks
import { useNavigate } from "react-router-dom";

const TodoListPage: React.FC = () => {
  const { tasks, loadTasks, createTask, updateTask, deleteTask } = useTasks();
  const navigate = useNavigate();

  // States for handling form data
  const [taskTitle, setTaskTitle] = useState("");
  const [editingTask, setEditingTask] = useState<{
    id: number;
    title: string;
  } | null>(null);

  useEffect(() => {
    loadTasks(); // Fetch tasks on initial load
  }, []);

  // Navigate to auth page if tasks are not available (user not authenticated)
  if (!tasks) {
    navigate("/auth");
  }

  // Handle task creation
  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle) {
      createTask({ title: taskTitle });
      setTaskTitle(""); // Clear input after task is created
    }
  };

  // Handle task update
  const handleUpdateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask && taskTitle) {
      updateTask(editingTask.id, { title: taskTitle });
      setEditingTask(null); // Clear the editing state
      setTaskTitle(""); // Clear input after updating task
    }
  };

  // Handle task deletion
  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  // Set the task to be edited
  const handleEditTask = (task: { id: number; title: string }) => {
    setEditingTask(task);
    setTaskTitle(task.title);
  };

  return (
    <div className="todolist-container">
      <h2>Your Tasks</h2>

      {/* Form to create or update task */}
      <form onSubmit={editingTask ? handleUpdateTask : handleCreateTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button type="submit">
          {editingTask ? "Update Task" : "Create Task"}
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListPage;
