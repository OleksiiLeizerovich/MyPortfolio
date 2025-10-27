import React from 'react';
import { Layout, Button, Space, Typography } from 'antd';
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

    return (
        <AntHeader className="app-header">
            <Text className="header-left" >{t('header.name')}</Text>

            <div className="header-center">
                <Space size="large">
                    <Text>{t('header.about')}</Text>
                    <Text>{t('header.2')}</Text>
                    <Text>{t('header.3')}</Text>
                    <Text>{t('header.4')}</Text>
                </Space>
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