import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchTasks, createTask, updateTask, deleteTask } from "./taskSlice";
import { selectTasks, selectTaskStatus, selectTaskError } from "./taskSelector";

export const useTasks = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const status = useAppSelector(selectTaskStatus);
  const error = useAppSelector(selectTaskError);

  const loadTasks = () => {
    dispatch(fetchTasks());
  };

  const createNewTask = (task: { title: string }) => {
    dispatch(createTask(task));
  };

  const updateExistingTask = (id: number, task: { title: string }) => {
    dispatch(updateTask({ id, title: task.title }));
  };

  const deleteExistingTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  return {
    tasks,
    status,
    error,
    loadTasks,
    createTask: createNewTask,
    updateTask: updateExistingTask,
    deleteTask: deleteExistingTask,
  };
};
