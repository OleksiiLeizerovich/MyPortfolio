import React, { useState } from 'react'; // <--- Додано useState
import { Layout, Button, Typography, Anchor, Switch, Space, Drawer, Grid } from 'antd'; // <--- Додано Drawer, Grid
import { GlobalOutlined, MoonOutlined, SunOutlined, MenuOutlined } from '@ant-design/icons'; // <--- Додано MenuOutlined
import { useTranslation } from 'react-i18next';
import './style.scss';

const { Header: AntHeader } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

const languages = ['en', 'uk', 'he'];
const languageLabels = {
    'en': 'EN',
    'uk': 'UK',
    'he': 'HE'
};

const Header = ({ isDarkMode, handleThemeChange }) => {
    const { t, i18n } = useTranslation();
    const [drawerVisible, setDrawerVisible] = useState(false);
    const screens = useBreakpoint();

    const isMobile = !screens.md;

    const showDrawer = () => {
        setDrawerVisible(true);
    };
    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    // Логіка мов (без змін)
    const handleLanguageChange = () => {
        const currentLang = i18n.language;
        const currentIndex = languages.indexOf(currentLang);
        const nextIndex = (currentIndex + 1) % languages.length;
        const newLang = languages[nextIndex];
        i18n.changeLanguage(newLang);
    };
    const currentLangIndex = languages.indexOf(i18n.language);
    const safeCurrentIndex = currentLangIndex === -1 ? 0 : currentLangIndex;
    const nextLangKey = languages[(safeCurrentIndex + 1) % languages.length];
    const buttonText = languageLabels[nextLangKey];

    // Елементи Anchor (без змін)
    const anchorItems = [
        { key: 'about', href: '#about', title: t('header.about') },
        { key: 'experience', href: '#experience', title: t('header.experience') },
        { key: 'contact', href: '#contact', title: t('header.contact') }
    ];

    const DesktopMenu = () => (
        <>
            <div className="app-header__center">
                <Anchor
                    direction="horizontal"
                    items={anchorItems}
                    className="app-header__anchor"
                />
            </div>
            <div className="app-header__right">
                <Space>
                    <Switch
                        checkedChildren={<MoonOutlined />}
                        unCheckedChildren={<SunOutlined />}
                        checked={isDarkMode}
                        onChange={handleThemeChange}
                    />
                    <Button icon={<GlobalOutlined />} onClick={handleLanguageChange}>
                        {buttonText}
                    </Button>
                </Space>
            </div>
        </>
    );

    const MobileMenu = () => (
        <Drawer
            title={t('header.menu', 'Меню')}
            placement={i18n.language === 'he' ? 'left' : 'right'}
            onClose={onCloseDrawer}
            open={drawerVisible}
        >
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Anchor
                    direction="vertical"
                    items={anchorItems}
                    className="app-header__anchor--mobile"
                    onClick={onCloseDrawer}
                />
                <Space direction="vertical" size="middle" className="app-header__drawer-controls">
                    <Switch
                        checkedChildren={<MoonOutlined />}
                        unCheckedChildren={<SunOutlined />}
                        checked={isDarkMode}
                        onChange={handleThemeChange}
                    />
                    <Button icon={<GlobalOutlined />} onClick={handleLanguageChange} block>
                        {buttonText}
                    </Button>
                </Space>
            </Space>
        </Drawer>
    );

    return (
        <AntHeader className={`app-header ${isMobile ? 'app-header--mobile' : ''}`}>

            <Text className={isMobile ? "app-header__left--mobile" : "app-header__left"}>
                {t('header.name')}
            </Text>

            {isMobile ? (
                <>
                    <Button
                        className="app-header__burger-button"
                        icon={<MenuOutlined />}
                        onClick={showDrawer}
                        type="text"
                    />
                    <MobileMenu />
                </>
            ) : (
                <DesktopMenu />
            )}

        </AntHeader>
    );
};

export default Header;