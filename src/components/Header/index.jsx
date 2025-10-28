import React from 'react';
import { Layout, Button, Typography, Anchor } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './style.scss';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'uk' ? 'en' : 'uk';
        i18n.changeLanguage(newLang);
    };

    const buttonText = i18n.language === 'uk' ? 'EN' : 'UK';

    const anchorItems = [
        {
            key: 'about',
            href: '#about', // Наприклад, ID вашої секції "Про мене"
            title: t('header.about'),
        },
        {
            key: 'experience',
            href: '#experience', // Наприклад, ID секції "Досвід роботи"
            title: t('header.2'), // Використовуємо ваші ключі з i18next
        },
        {
            key: 'projects',
            href: '#projects', // Наприклад, ID секції "Проєкти"
            title: t('header.3'),
        },
        {
            key: 'contact',
            href: '#contact', // Наприклад, ID секції "Контакти"
            title: t('header.4'),
        },
    ];

    return (
        <AntHeader className="app-header">
            <Text className="header-left">{t('header.name')}</Text>

            <div className="header-center">
                <Anchor
                    direction="horizontal"
                    items={anchorItems}
                    className="header-anchor"
                />
            </div>

            <div className="header-right">
                <Button
                    icon={<GlobalOutlined />}
                    onClick={handleLanguageChange}
                >
                    {buttonText}
                </Button>
            </div>
        </AntHeader>
    );
};

export default Header;