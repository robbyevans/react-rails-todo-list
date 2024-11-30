import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchTasks } from "./taskSlice";
import { selectTasks, selectTaskStatus, selectTaskError } from "./taskSelector";

export const useTasks = (token: string) => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTasks);
  const status = useAppSelector(selectTaskStatus);
  const error = useAppSelector(selectTaskError);

  const loadTasks = () => {
    dispatch(fetchTasks(token));
  };

  return { tasks, status, error, loadTasks };
};
