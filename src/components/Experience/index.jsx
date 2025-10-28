import React from 'react';
import { Typography, Card, Space, Tag } from 'antd';
import { CalendarOutlined, LaptopOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './style.scss';

import experienceUK from '/src/assets/experienceUK.json'
import experienceEN from '/src/assets/experienceEN.json'

const { Title, Text, Paragraph } = Typography;

const ExperienceItem = ({ title, shortDescription, description, startDate, endDate }) => {
    return (
        <Card
            className="experience-item"
            hoverable
        >
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div className="experience-item__header">
                    <Space direction="vertical" size="small" className="experience-item__title-section">
                        <Space align="center" wrap>
                            <LaptopOutlined className="experience-item__icon" />
                            <Title level={3} className="experience-item__title">
                                {title}
                            </Title>
                        </Space>
                        <Text className="experience-item__short-description">
                            {shortDescription}
                        </Text>
                    </Space>
                    <Tag
                        icon={<CalendarOutlined />}
                        color="blue"
                        className="experience-item__date-tag"
                    >
                        {startDate} – {endDate}
                    </Tag>
                </div>

                <Space direction="vertical" size="small" className="experience-item__description">
                    {description.map((item, index) => (
                        <Paragraph key={index} className="experience-item__description-item">
                            - {item}
                        </Paragraph>
                    ))}
                </Space>
            </Space>
        </Card>
    );
};

const Experience = () => {
    const { t, i18n } = useTranslation();

    const currentExperiences = i18n.language === 'uk'
        ? experienceUK
        : experienceEN;

    return (
        <div id="experience" className="experience">
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <Title level={2} className="experience__main-title">
                    {t('experience.title')}
                </Title>

                <Space direction="vertical" size="large" className="experience__list" style={{ width: '100%' }}>
                    {currentExperiences.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            title={exp.title}
                            shortDescription={exp.shortDescription}
                            description={exp.description}
                            startDate={exp.startDate}
                            endDate={exp.endDate}
                        />
                    ))}
                </Space>
            </Space>
        </div>
    );
};

export default Experience;