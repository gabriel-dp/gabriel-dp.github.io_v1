import { Routes, Route } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';

import MainPage from './pages/MainPage';
import About from './pages/About';
import Projects from './pages/Projects';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import DarkTheme from './styles/themes/dark';
import LightTheme from './styles/themes/light';

function App() {

	const[theme, setTheme] = usePersistedState('PortfolioTheme', DarkTheme);
	const ToggleTheme = () => {
		setTheme(theme.title === 'light' ? DarkTheme : LightTheme);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<Routes>
				<Route 
					path='/'
					element={
						<MainPage ToggleTheme={ToggleTheme}/>
					}
				/>
				<Route 
					path='/projects' 
					exact
					element={
						<Projects ToggleTheme={ToggleTheme}/>
					}
				/>
				<Route 
					path='/about-me' 
					exact
					element={
						<About ToggleTheme={ToggleTheme}/>
					}
				/>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
