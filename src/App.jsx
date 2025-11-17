import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ConfigProvider, App as AntApp, theme } from "antd";

import Header from '/src/components/Header';
import AboutMe from "./components/AboutMe/index.jsx";
import Experience from "./components/Experience/index.jsx";
import Contacts from "./components/Contacts/index.jsx";

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { i18n } = useTranslation();

    useEffect(() => {
        document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    }, [i18n.language]);

    const handleThemeChange = (checked) => {
        setIsDarkMode(checked);
    };

    useEffect(() => {
        const currentAlgorithm = isDarkMode ? darkAlgorithm : defaultAlgorithm;

        const themeTokens = currentAlgorithm(theme.defaultSeed);

        document.body.style.backgroundColor = themeTokens.colorBgLayout;

    }, [isDarkMode]);
  return (
    <ConfigProvider theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }} direction={i18n.language === 'he' ? 'rtl' : 'ltr'}>
        <AntApp>
            <Header isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
            <AboutMe />
            <Experience />
            <Contacts />
        </AntApp>
    </ConfigProvider>
  )
}

export default App
