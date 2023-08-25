import { useReducer } from 'react';
import './App.css';

// ACTION: INCREASE, DECREASE
function reducerFunction(state, action) {
	switch (action.type) {
		case 'INCREASE':
			return { count: state.count + 1 };
		case 'DECREASE':
			return { count: state.count - 1 };
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducerFunction, { count: 0 });

	return (
		<div className='App'>
			<h1>{state.count}</h1>
			<button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
			<button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
		</div>
	);
}

export default App;
