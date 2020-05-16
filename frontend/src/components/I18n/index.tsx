import React from "react";
import Emoji from "react-emoji-render";
import { useTranslation } from "react-i18next";

import { Language } from "../../resources/enums";

const I18n = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="i18n">
      <button onClick={() => i18n.changeLanguage(Language.br)}>
        <Emoji text=":flag_brazil:" onlyEmojiClassName="make-emojis-large" />
      </button>
      <button onClick={() => i18n.changeLanguage(Language.en)}>
        <Emoji
          text=":flag_united_states:"
          onlyEmojiClassName="make-emojis-large"
        />
      </button>
    </div>
  );
};

export default I18n;
