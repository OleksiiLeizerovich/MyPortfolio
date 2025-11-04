import { useState } from 'react';
import { ConfigProvider, App as AntApp, theme } from "antd";

import Header from '/src/components/Header';
import AboutMe from "./components/AboutMe/index.jsx";
import Experience from "./components/Experience/index.jsx";
import Contacts from "./components/Contacts/index.jsx";

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeChange = (checked) => {
        setIsDarkMode(checked);
    };
  return (
    <ConfigProvider theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}>
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
