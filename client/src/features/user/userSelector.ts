import { RootState } from "../../store/store";

export const selectUserToken = (state: RootState) => state.user.token;
export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUserError = (state: RootState) => state.user.error;
