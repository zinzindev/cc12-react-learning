// import { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countActions } from './redux/store';

import './App.css';

// ACTION: INCREASE, DECREASE
// function reducerFunction(state, action) {
// 	switch (action.type) {
// 		case 'INCREASE':
// 			return { count: state.count + 1 };
// 		case 'DECREASE':
// 			return { count: state.count - 1 };
// 		default:
// 			return state;
// 	}
// }

//[...todos, {id:, title}]
//todos.push({id:, title})

// function App() {
// 	const [state, dispatch] = useReducer(reducerFunction, { count: 0, loding: false, error: '' });
// 	const [sta, setSta] = useState({ count: 0, loding: false, error: '' });

// 	return (
// 		<div className='App'>
// 			<h1>{state.count}</h1>
// 			<button onClick={() => dispatch({ type: 'INCREASE' })}>+</button>
// 			<button onClick={() => dispatch({ type: 'DECREASE' })}>-</button>
// 		</div>
// 	);
// }

function App() {
	const count = useSelector((state) => {
		console.log(state);
		return state.count.count;
	});

	const dispatch = useDispatch();

	return (
		<div className='App'>
			<h1>{count}</h1>
			<button onClick={() => dispatch(countActions.increase())}>+</button>
			<button onClick={() => dispatch(countActions.decrease())}>-</button>
			<button onClick={() => dispatch(countActions.increase(2))}>Increase by two</button>
		</div>
	);
}

// countActions.increase(2) => {type: 'counter/increase', payload: 2}

export default App;
