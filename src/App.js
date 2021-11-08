import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

const items = [
  {
    title: "what is react?",
    content: "it is front end java script framework",
  },
  {
    title: "what is react?",
    content: "it is front end java script framework",
  },
  {
    title: "what is react?",
    content: "it is front end java script framework",
  },
];
const options = [
  {
    label: "the color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "the color blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        toggle button
      </button>
      {showDropdown ? 
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> : null
        } */}
    </div>
  );
};

export default App;
