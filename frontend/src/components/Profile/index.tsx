import React from "react";
import { useTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Avatar from "../../assets/avatar.png";

import { LanguageItems } from "../../resources/enums";

import "./styles.css";

const Profile = () => {
  const [t, i18n] = useTranslation();

  return (
    <Row className="profile">
      <Row>
        <Col md={4} lg={4}>
          <img className="avatar" src={Avatar} alt="Game Avatar" />
        </Col>
        <Col md={8} lg={8}>
          <p className="profile-name">Gustavo Andrade Guimarães</p>
          <p>{t(LanguageItems.Role)}</p>
          <p>Lvl 28</p>
        </Col>
      </Row>

      <Row>
        <Col md={2} lg={2}>
          <i className="devicon-csharp-plain" />
        </Col>
        <Col md={10} lg={10}>
          <a
            className="social-text"
            href="https://github.com/gustaandrade"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/gustaandrade
          </a>
        </Col>

        <Col md={2} lg={2}>
          <i className="linkedin" />
        </Col>
        <Col md={10} lg={10}>
          <a
            className="social-text"
            href="https://linkedin.com/in/gustaandrade"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/gustaandrade
          </a>
        </Col>

        <Col md={2} lg={2}>
          <i className="gmail" />
        </Col>
        <Col md={10} lg={10}>
          <a
            className="social-text"
            href="mailto:oi@gustavoandrade.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            oi@gustavoandrade.design
          </a>
        </Col>

        <Col md={2} lg={2}>
          <i className="whatsapp" />
        </Col>
        <Col md={10} lg={10}>
          <a
            className="social-text"
            href="https://wa.me/5511943771859"
            target="_blank"
            rel="noopener noreferrer"
          >
            +55 11 94377-1859
          </a>
        </Col>
      </Row>
    </Row>
  );
};

export default Profile;
