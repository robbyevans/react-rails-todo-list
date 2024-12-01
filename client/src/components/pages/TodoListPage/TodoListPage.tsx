import React, { useEffect, useState } from "react";
import { useTasks } from "../../../features/tasks/useTasks";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useUser } from "../../../features/user/useUser";

const TodoListPage: React.FC = () => {
  const { tasks, loadTasks, createTask, updateTask, deleteTask } = useTasks();
  const { isUserAuthenticated, handleLogout } = useUser();
  const navigate = useNavigate();

  const [taskTitle, setTaskTitle] = useState("");
  const [editingTask, setEditingTask] = useState<{
    id: number;
    title: string;
  } | null>(null);

  useEffect(() => {
    if (!isUserAuthenticated) {
      navigate("/auth");
    } else {
      loadTasks();
    }
  }, [isUserAuthenticated, navigate]);

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle) {
      createTask({ title: taskTitle });
      setTaskTitle("");
    }
  };

  const handleUpdateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask && taskTitle) {
      updateTask(editingTask.id, { title: taskTitle });
      setEditingTask(null);
      setTaskTitle("");
    }
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  const handleEditTask = (task: { id: number; title: string }) => {
    setEditingTask(task);
    setTaskTitle(task.title);
  };

  const handleUserLogout = () => {
    handleLogout();
    navigate("/auth");
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Your Tasks</S.Title>
        <S.LogoutButton onClick={handleUserLogout}>Logout</S.LogoutButton>
      </S.Header>

      <S.Form onSubmit={editingTask ? handleUpdateTask : handleCreateTask}>
        <S.InputField
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <S.SubmitButton type="submit">
          {editingTask ? "Update Task" : "Create Task"}
        </S.SubmitButton>
      </S.Form>

      <S.List>
        {tasks.map((task) => (
          <S.ListItem key={task.id}>
            <S.TaskTitle>{task.title}</S.TaskTitle>
            <S.TaskButtons>
              <S.EditButton onClick={() => handleEditTask(task)}>
                Edit
              </S.EditButton>
              <S.DeleteButton onClick={() => handleDeleteTask(task.id)}>
                Delete
              </S.DeleteButton>
            </S.TaskButtons>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};

export default TodoListPage;
