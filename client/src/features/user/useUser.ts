import { useAppDispatch, useAppSelector } from "../../store/hook";
import { loginUser, signupUser, logout } from "./userSlice";
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

  const handleLogin = (username: string, password: string) => {
    dispatch(loginUser({ username, password }));
  };

  const isUserAuthenticated = !!token;
  const handleSignup = (
    username: string,
    password: string,
    passwordConfirmation: string
  ) => {
    dispatch(signupUser({ username, password, passwordConfirmation }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    status,
    error,
    isUserAuthenticated,
    handleLogin,
    handleSignup,
    handleLogout,
  };
};
