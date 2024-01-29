import './App.css'

import MyApp from './MyApp';

import { ThemeProvider } from './theme/ThemeProvider';

const App = () => {
return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
};

export default App
