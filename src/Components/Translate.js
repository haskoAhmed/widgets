import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
];

const Translation = () => {
  const [languages, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter </label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        selected={languages}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h1 className="ui header">output</h1>
      <Convert text={text} language={languages} />
    </div>
  );
};

export default Translation;
