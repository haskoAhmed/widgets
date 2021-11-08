import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php/", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term && !results.length) {
      search();
    } else {
      const timeOut = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [term]);

  const renderList = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label>Search</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="input"
        />
      </div>
      {renderList}
    </div>
  );
};

export default Search;
