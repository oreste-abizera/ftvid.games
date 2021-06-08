import React, { ReactElement, useContext, useState } from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import Context from "../context/ContextProvider";

export default function Navbar(): ReactElement {
  const { searchKey, handleSearchKey, search, searchRecent }: any = useContext(
    Context
  );
  const history = useHistory();
  const [suggestionsShown, setSuggestionsShown] = useState(false);
  const [suggestions, setsuggestions] = useState([]);

  const changeSuggestionShown = (newValue: boolean) => {
    loadSuggestions();
    setSuggestionsShown(newValue);
  };

  const loadSuggestions = () => {
    const tempSuggestions = localStorage.getItem("suggestions");
    let finalSuggestions = tempSuggestions ? JSON.parse(tempSuggestions) : [];
    setsuggestions(finalSuggestions.reverse().slice(0, 5));
  };
  return (
    <NavbarWrapper>
      <Tilt className="tilt">
        <img onClick={() => history.push("/")} src={logo} alt="Logo"></img>
      </Tilt>
      <form className="searchBox" onSubmit={search}>
        <input
          type="text"
          placeholder="Search videos here"
          value={searchKey}
          onChange={handleSearchKey}
          onFocus={() => changeSuggestionShown(false)}
          onBlur={() => changeSuggestionShown(false)}
        ></input>
        <FaSearch onClick={search}></FaSearch>
        {suggestionsShown && suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => {
                  alert("suggestion clicked..");
                  searchRecent(suggestion);
                }}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </form>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  /* background-color: #2d4059; */
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20% 0 2rem;
  box-shadow: 0px 8px 5px -6px rgba(193, 191, 191, 0.75);
  -webkit-box-shadow: 0px 8px 5px -6px rgba(193, 191, 191, 0.75);
  -moz-box-shadow: 0px 8px 5px -6px rgba(193, 191, 191, 0.75);
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;

  > .tilt {
    height: 70%;
  }
  img {
    height: 100%;
    cursor: pointer;
  }

  .searchBox {
    display: flex;
    height: 50%;
    min-width: 30%;
    align-items: flex-end;
    margin-left: 1rem;
    position: relative;
  }

  .searchBox input {
    width: 90%;
    height: 100%;
    border: 1.5px solid #e5e5e5;
    outline: none;
    padding: 0.5rem;
  }

  .searchBox > svg {
    width: 10%;
    height: 100%;
    border: 1.5px solid #e5e5e5;
    color: #e5e5e5;
    padding: 0.2rem;
    cursor: pointer;
  }

  .suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    width: 90%;
    border: 1.5px solid #e5e5e5;
    background-color: #fff;
  }

  .suggestions > div {
    padding: 0.5rem;
    cursor: pointer;
  }

  .suggestions > div:hover {
    background-color: #e5e5e5;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    .searchBox input {
      width: 85%;
    }
    .searchBox > svg {
      width: 15%;
    }
  }
`;
