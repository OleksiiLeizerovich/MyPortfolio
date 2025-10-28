import React from 'react';
import { Row, Col, Typography, Image, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import './style.scss';
import Photo from './Photo.jpg';

const { Title, Paragraph } = Typography;

const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <div id="about" className="about-me">
            <Row gutter={[32, 32]} align="middle">
                <Col xs={24} md={12} className="about-me__photo-col">
                    <div className="about-me__photo-wrapper">
                        <Image
                            src={Photo}
                            alt="Profile"
                            className="about-me__photo"
                        />
                    </div>
                </Col>

                <Col xs={24} md={12} className="about-me__text-col">
                    <Space direction="vertical" size="middle" className="about-me__content">
                        <Title level={1} className="about-me__name">
                            {t('about-me.name')}
                        </Title>
                        <Paragraph className="about-me__description">
                            {t('about-me.paragraph')}
                        </Paragraph>
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default AboutMe;