 import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: { count: 123456 },
	reducers: {
		increase: (state, action) => {
			// console.log(state)
   			console.log(action);
			state.count = state.count + (action.payload ?? 1);
			// return {...state, count: state.count + 1}
		},
		decrease: (state, action) => {
			state.count = state.count - 1;
		},
	},
});

console.log(counterSlice);
const counterSliceActions = counterSlice.actions;


const authSlice = createSlice({
	name: 'auth',
	initialState: { user: { id: 1, username: 'john' }, isLogged: true },
	reducers: {
		login: (state, action) => {},
		logout: (state, action) => {},
	},
});

// console.log(counterSlice.reducer);
const store = configureStore({
	reducer: {
		counterStore: counterSlice.reducer,
		authStore: authSlice.reducer,
	},
});


export { store, counterSliceActions };
