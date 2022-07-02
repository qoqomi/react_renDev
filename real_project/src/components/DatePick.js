import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { format } from "date-fns";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import getDate from "date-fns/getDate";
import CustomInput from "./CustomInput";
import "./day.css";
const Datepick = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
  );

  const endDateOnChange = (date) => {
    setEndDate(date);

    //node.js로 보내주는 형식
    console.log(startDate.toISOString().slice(0, 10));
  };
  return (
    <>
      <Container>
        <SelectDate
          id="start_date"
          selected={startDate}
          dateFormat="yyyy년 MM월 dd일"
          onChange={(date) => setStartDate(date)}
          placeholderText="클릭해주세요."
          minDate={new Date()}
          locale={ko}
          wrapperClassName="date-picker"
          showPopperArrow={false}
          customInput={<CustomInput startDate={startDate} />}
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            monthDate,
          }) => (
            <div>
              <div
                style={{
                  fontSize: "15px",
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                프로젝트 시작일
              </div>
              <div>
                <button
                  style={{
                    border: "none",
                    margin: "10px",
                    backgroundColor: "white",
                  }}
                  onClick={decreaseMonth}
                >
                  {"<"}
                </button>
                <span className="react-datepicker__current-month">
                  {monthDate.toLocaleString("ko", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <button
                  style={{
                    border: "none",
                    margin: "10px",
                    backgroundColor: "white",
                  }}
                  onClick={increaseMonth}
                >
                  {">"}
                </button>
              </div>
            </div>
          )}
        />

        <BetweenDate> ~ </BetweenDate>
        <SelectDate
          id="end_date"
          selected={endDate}
          minDate={startDate}
          dateFormat="yyyy-MM-dd"
          onChange={(date) => {
            endDateOnChange(date);
          }}
          placeholderText="클릭해주세요."
          locale={ko}
          showPopperArrow={false}
        />
      </Container>
    </>
  );
};
const Container = styled.div`
  display: flex;
  padding-top: 30px;
`;
const SelectDate = styled(DatePicker)`
  height: 22px;
  padding: 20px 5px;
  margin: 20px 5px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  border-radius: 30px;
`;
const BetweenDate = styled.span`
  display: table;
  padding: 30px 5px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;
export default Datepick;
