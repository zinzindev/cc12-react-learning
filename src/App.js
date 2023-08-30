// import { useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterSliceActions } from './redux/store';

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
	const counts = useSelector((state) => {
		console.log('useSelector -> state')
		console.log(state);
		return state.counterStore.counterIntState;
	});

	const dispatch = useDispatch();

	return (
		<div className='App'>
			<h1>{counts}</h1>
			<button onClick={() => dispatch(counterSliceActions.increase())}>+</button>
			<button onClick={() => dispatch(counterSliceActions.decrease())}>-</button>
			<br/>
			<button onClick={() => dispatch(counterSliceActions.increase(2))}>Increase by two</button>
		</div>
	);
}

// counterSliceActions.increase(2) => {type: 'counter/increase', payload: 2}

export default App;
