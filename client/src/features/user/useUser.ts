import { useAppDispatch, useAppSelector } from "../../store/hook";
import { loginUser, logout } from "./userSlice";
import {
  selectUserToken,
  selectUserStatus,
  selectUserError,
} from "./userSelector";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectUserToken);
  const status = useAppSelector(selectUserStatus);
  const error = useAppSelector(selectUserError);

  const login = (username: string, password: string) => {
    dispatch(loginUser({ username, password }));
  };

  const userLogout = () => {
    dispatch(logout());
  };

  return { token, status, error, login, userLogout };
};
