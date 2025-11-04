import React from 'react';
import { Layout, Button, Typography, Anchor, Switch, Space } from 'antd';
import { GlobalOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './style.scss';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header = ({ isDarkMode, handleThemeChange }) => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'uk' ? 'en' : 'uk';
        i18n.changeLanguage(newLang);
    };

    const buttonText = i18n.language === 'uk' ? 'EN' : 'UK';

    const anchorItems = [
        {
            key: 'about',
            href: '#about',
            title: t('header.about'),
        },
        {
            key: 'experience',
            href: '#experience',
            title: t('header.experience'),
        },
        {
            key: 'contact',
            href: '#contact',
            title: t('header.contact'),
        }
    ];

    return (
        <AntHeader className="app-header">

            <Text className="app-header__left">{t('header.name')}</Text>

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
                    <Button
                        icon={<GlobalOutlined />}
                        onClick={handleLanguageChange}
                    >
                        {buttonText}
                    </Button>
                </Space>
            </div>
        </AntHeader>
    );
};

export default Header;