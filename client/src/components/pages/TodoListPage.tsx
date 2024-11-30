import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/slices/taskSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

const TodoListPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks, status, error } = useSelector(
    (state: RootState) => state.tasks
  );
  const { token } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    } else {
      dispatch(fetchTasks(token));
    }
  }, [dispatch, token, navigate]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Your Todo List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.completed ? "Completed" : "Pending"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoListPage;
