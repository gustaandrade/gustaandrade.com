import React from "react";
import Emoji from "react-emoji-render";
import { useTranslation } from "react-i18next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Language } from "../../resources/enums";

import "./styles.css";

const I18n = () => {
  const [t, i18n] = useTranslation();

  return (
    <Row className="i18n">
      <Col lg={6}>
        <button onClick={() => i18n.changeLanguage(Language.br)}>
          <Emoji text=":flag_brazil:" onlyEmojiClassName="make-emojis-large" />
        </button>
      </Col>
      <Col lg={6}>
        <button onClick={() => i18n.changeLanguage(Language.en)}>
          <Emoji
            text=":flag_united_states:"
            onlyEmojiClassName="make-emojis-large"
          />
        </button>
      </Col>
    </Row>
  );
};

export default I18n;
