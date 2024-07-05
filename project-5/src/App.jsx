import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ThemeSwitcher from './Componet/ThemeSwitcher';
import LanguageSwitcher from './Componet/LanguageSwitcher';

function App() {
  const defaultTheme = 'light';
  const defaultLanguage = 'en';

  const [theme, setTheme] = useState(sessionStorage.getItem('theme') || defaultTheme);
  const [language, setLanguage] = useState(localStorage.getItem('language') || defaultLanguage);

  useEffect(() => {
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const handleTabClose = () => {
      sessionStorage.removeItem('theme');
    };
    window.addEventListener('beforeunload', handleTabClose);
    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
    };
  }, []);

  return (
    <div className={`app ${theme}`}>
      <h1>Theme and Language Settings</h1>
      {/* <ThemeSwitcher theme={theme} setTheme={setTheme} /> */}
      {/* <LanguageSwitcher language={language} setLanguage={setLanguage} /> */}
      <ThemeSwitcher theme={theme} setTheme={setTheme}/>
      <LanguageSwitcher language={language} setLanguage={setLanguage}/>
    </div>
  );
}



export default App;
