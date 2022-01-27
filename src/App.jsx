import { HashRouter, Routes, Route } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';

import MainPage from './pages/MainPage';
import About from './pages/About';

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
			<HashRouter>
				<Routes>
					<Route 
						path='/'
						element={
							<MainPage ToggleTheme={ToggleTheme}/>
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
			</HashRouter>
		</ThemeProvider>
	);
}

export default App;
