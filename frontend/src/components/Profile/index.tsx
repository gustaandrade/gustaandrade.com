import React from "react";
import { useTranslation } from "react-i18next";

import { Container } from "./styles";

import Avatar from "../../assets/avatar.png";

import { LanguageItems } from "../../resources/enums";

const Profile = () => {
  const [t, i18n] = useTranslation();

  return (
    <Container>
      <div className="profile">
        <img className="avatar" src={Avatar} alt="Game Avatar" />
        <p className="profile-name">Gustavo Andrade Guimarães</p>
        <p>{t(LanguageItems.Role)}</p>
        <p>Lvl 28</p>

        <i className="devicon-csharp-plain" />
        <a
          className="social-text"
          href="https://github.com/gustaandrade"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/gustaandrade
        </a>

        <i className="linkedin" />
        <a
          className="social-text"
          href="https://linkedin.com/in/gustaandrade"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/gustaandrade
        </a>

        <i className="gmail" />
        <a
          className="social-text"
          href="mailto:oi@gustavoandrade.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          oi@gustavoandrade.design
        </a>

        <i className="whatsapp" />
        <a
          className="social-text"
          href="https://wa.me/5511943771859"
          target="_blank"
          rel="noopener noreferrer"
        >
          +55 11 94377-1859
        </a>
      </div>
    </Container>
  );
};

export default Profile;
