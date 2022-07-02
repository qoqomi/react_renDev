import React, { useRef, useState } from "react";
import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";

const DayPickerTwo = () => {
  const [selected, setSelected] = useState("");
  const today = new Date();

  return (
    <div>
      <button
        ref={buttonRef}
        type="button"
        className="pa2 bg-white button-reset ba"
        aria-label="Pick a date"
        onClick={handleButtonClick}
      >
        <span role="img" aria-label="calendar icon">
          📅
        </span>
      </button>
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={setSelected}
        locale={ko}
        numberOfMonths={2}
        disabled={{ before: today }}
      ></DayPicker>
    </div>
  );
};

export default DayPickerTwo;
