import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { AxiosError } from "axios";
import { RootState } from "../../store/store";
import { logout } from "../user/userSlice";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch tasks
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const token = state.user.token; // Access token from user slice in state

    try {
      const response = await api.get("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to fetch tasks"
        );
      }
    }
  }
);

// Thunks for create, update, and delete tasks
export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (task: { title: string }, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const token = state.user.token;

    try {
      const response = await api.post(
        "/tasks",
        { title: task.title },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to create task"
        );
      }
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (
    { id, title }: { id: number; title: string },
    { rejectWithValue, getState }
  ) => {
    const state = getState() as RootState;
    const token = state.user.token;

    try {
      const response = await api.put(
        `/tasks/${id}`,
        { title },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to update task"
        );
      }
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id: number, { rejectWithValue, getState }) => {
    const state = getState() as RootState;
    const token = state.user.token;

    try {
      await api.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return id; // Return the task id to remove it from the state
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Failed to delete task"
        );
      }
    }
  }
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload); // Add new task to the state
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks[index] = action.payload; // Update task in the state
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload); // Remove deleted task
      })
      .addCase(logout, (state) => {
        state.tasks = [];
        state.status = "idle";
        state.error = null;
      });
  },
});

export default taskSlice.reducer;
