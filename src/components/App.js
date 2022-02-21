import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../views/HomePage';
import Projects from '../views/Projects';
import { AppWrapper } from './App.styled';

function App()
{
	return (
		<AppWrapper>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</AppWrapper>
	);
}

export default App;
