import axios from "axios";
import React, { useState, useEffect } from "react";

const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debounceText, setDebounceText] = useState("");
  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebounceText(text);
    }, 500);
    return () => {
      clearTimeout(timeId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounceText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslate();
  }, [language, debounceText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
