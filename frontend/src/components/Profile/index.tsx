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
      <Col lg={3}>
        <img className="avatar" src={Avatar} alt="Game Avatar" />
      </Col>
      <Col lg={9}>
        <span>Gustavo Andrade Guimarães</span>
        <span>{t(LanguageItems.Role)}</span>
        <span>Lvl 28</span>
      </Col>
    </Row>
  );
};

export default Profile;
