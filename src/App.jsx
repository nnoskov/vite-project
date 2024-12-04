import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './App.css';

export const App = () => {
	const year = new Date().getFullYear(); // Декларативный стиль программирования
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				{/* Декларативный */}
				<a href="https://vite.dev" target="_blank">
					{/* Декларативный */}
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				{/* Декларативный */}
				<a href="https://react.dev" target="_blank">
					{' '}
					{/* Декларативный */}
					<img src={reactLogo} className="logo react" />
				</a>
			</div>
			{/* Декларативный */}
			<h1>Vite + React</h1>
			<div className="card">
				{/* (count) => count + 1 Императивный */}
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>{' '}
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more in {year}
			</p>
		</>
	);
};
