import React, { useState } from "react";
import "../styles/Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

function Search(props) {
  const [startDate, setStaetDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  function handleSelect(ranges) {
    setStaetDate(ranges.selection.startDate);
    setEndDate(ranges.selection.EndDate);
  }
  const history = useHistory();
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guest <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />

      <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
    </div>
  );
}

export default Search;
