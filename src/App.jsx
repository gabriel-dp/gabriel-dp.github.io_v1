import usePersistedState from './utils/usePersistedState';

import MainPage from './pages/MainPage';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import DarkTheme from './styles/themes/dark';
import LightTheme from './styles/themes/light';

function App() {

	const[theme, setTheme] = usePersistedState('theme', DarkTheme);
	const ToggleTheme = () => {
		setTheme(theme.title === 'light' ? DarkTheme : LightTheme);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<MainPage
				ToggleTheme={ToggleTheme}
			/>
		</ThemeProvider>
	);
}

export default App;
