import React from 'react';
import { Typography, Space, Tooltip, Button } from 'antd';
import {
    MailOutlined,
    PhoneOutlined,
    LinkedinOutlined,
    GithubOutlined,
    GlobalOutlined, SendOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './style.scss';

const { Title } = Typography;

const socialLinksData = [
    {
        type: 'email',
        value: 'leizerovich1321@gmail.com',
        label: 'Написати мені'
    },
    {
        type: 'phone',
        value: '+380507681409',
        label: 'Подзвонити'
    },
    {
        type: 'linkedin',
        value: 'https://www.linkedin.com/in/oleksii-leizerovich/',
        label: 'LinkedIn'
    },
    {
        type: 'github',
        value: 'https://github.com/OleksiiLeizerovich',
        label: 'GitHub'
    },
    {
        type: 'telegram',
        value: 'https://t.me/xthik806',
        label: 'Telegram'
    }
];

const getLinkDetails = (item) => {
    let href = item.value;
    let icon = <GlobalOutlined />;
    let target = '_blank';
    let rel = 'noopener noreferrer';

    switch (item.type) {
        case 'email':
            href = `mailto:${item.value}`;
            icon = <MailOutlined />;
            target = '_self';
            rel = '';
            break;
        case 'phone':
            href = `tel:${item.value}`;
            icon = <PhoneOutlined />;
            target = '_self';
            rel = '';
            break;
        case 'linkedin':
            icon = <LinkedinOutlined />;
            break;
        case 'github':
            icon = <GithubOutlined />;
            break;
        case 'telegram':
            icon = <SendOutlined />;
            break;
    }

    return { href, icon, target, rel, label: item.label };
};


const Contacts = () => {
    const { t } = useTranslation();

    return (
        <div id="contact" className="contacts-section">

            <div className="contacts-section__content">
                <Space direction="vertical" align="center" size="large">
                    <Title level={2} className="contacts-section__title">
                        {t('contact.title')}
                    </Title>

                    <Space size="large" wrap>
                        {socialLinksData.map((item) => {
                            const { href, icon, target, rel, label } = getLinkDetails(item);

                            return (
                                <Tooltip title={label} key={item.type}>
                                    {/* 4. ЕЛЕМЕНТ (Змінено) */}
                                    <Button
                                        type="primary"
                                        shape="circle"
                                        icon={icon}
                                        size="large"
                                        href={href}
                                        target={target}
                                        rel={rel}
                                        className="contacts-section__button"
                                    />
                                </Tooltip>
                            );
                        })}
                    </Space>
                </Space>
            </div>
        </div>
    );
};

export default Contacts;