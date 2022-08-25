import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

// экспорт санок для загрузки списка задач
export const loadTasks = createAsyncThunk(
  'todo/loadTasks',
  async (placeId) => {
    const response = await fetch(`/api/place/${placeId}/tasks`);
    const data = await response.json();
    return data;
  }
);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTasks.fulfilled, (state, action) => {
        // фильтрую пришедший массив с тасками и оставляю в нем только те, которых в стейте еще нет
        const newTasks = action.payload.filter((el) =>
        !state.tasks.find((task) => task.id === el.id));
        // и затем пушу их массив в стейт
        state.tasks.push(...newTasks);
      });
  }
});

// экспорт функции селектора
export const selectTasks = (state) => state.todo.tasks;

// экспорт функции редьюсера
export default todoSlice.reducer;
