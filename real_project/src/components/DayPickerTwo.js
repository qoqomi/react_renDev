import React, { useRef, useState } from "react";
import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";

const DayPickerTwo = () => {
  const [selected, setSelected] = useState("");
  const today = new Date();
  const [toggle, setToggle] = useState(false);

  console.log("날짜", selected);
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  let footer = (
    <Container1
      type="button"
      className="pa2 bg-white button-reset ba"
      aria-label="Pick a date"
      onClick={onClickToggle}
    >
      <ContainerStartDateDiv1>
        <ButtonName>프로젝트 시작</ButtonName>
        <SelectedDate>날짜 입력</SelectedDate>
      </ContainerStartDateDiv1>
      <ContainerStartDateDiv1>
        <ButtonName>프로젝트 끝</ButtonName>
        <SelectedDate>날짜 입력</SelectedDate>
      </ContainerStartDateDiv1>
    </Container1>
  );
  if (selected?.from) {
    if (!selected.to) {
      footer = (
        <Container1
          type="button"
          className="pa2 bg-white button-reset ba"
          aria-label="Pick a date"
          onClick={onClickToggle}
        >
          <ContainerStartDateDiv1>
            <ButtonName>프로젝트 시작</ButtonName>
            <SelectedDate>{format(selected.from, "MM월 dd일 ")}</SelectedDate>
          </ContainerStartDateDiv1>
          <ContainerStartDateDiv1>
            <ButtonName>프로젝트 끝</ButtonName>
            <SelectedDate>날짜 입력</SelectedDate>
          </ContainerStartDateDiv1>
        </Container1>
      );
    } else if (selected?.to) {
      footer = (
        <Container1
          type="button"
          className="pa2 bg-white button-reset ba"
          aria-label="Pick a date"
          onClick={onClickToggle}
        >
          <ContainerStartDateDiv1>
            <ButtonName>프로젝트 시작</ButtonName>
            <SelectedDate>{format(selected.from, "MM월 dd일 ")}</SelectedDate>
          </ContainerStartDateDiv1>
          <ContainerStartDateDiv1>
            <ButtonName>프로젝트 끝</ButtonName>
            <SelectedDate>{format(selected.to, "MM월 dd일")}</SelectedDate>
          </ContainerStartDateDiv1>
        </Container1>
      );
    }
  }

  return (
    <DivDayPicker>
      {footer}
      {toggle ? (
        <DayPicker
          className="dayPicker_container__divMain"
          styles={{
            caption: { fontSize: "10px", padding: "10px" },
          }}
          mode="range"
          selected={selected}
          onSelect={setSelected}
          locale={ko}
          numberOfMonths={2}
          disabled={{ before: today }}
        ></DayPicker>
      ) : (
        ""
      )}
    </DivDayPicker>
  );
};
//첫번째 시안

//제일 큰 상자
const Container1 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border: 1px solid #685bc7;
  padding: 0 0px;
  margin-left: 30px;

  border-radius: 30px;
  background-color: white;
  transition: 0.4s ease;
  border: 1px solid #685bc7;
  outline: none;
  margin-top: 0px;
`;
//시작날짜, 끝날짜 따로따로
const ContainerStartDateDiv1 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  border-radius: 20px;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;

  &:hover {
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.middleGray};
  }
`;
//시작날짜 폰트
const ButtonName = styled.p`
  margin: 0 0 4px 2px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20%;
  color: ${({ theme }) => theme.black};
`;
//선택날짜 폰트
const SelectedDate = styled.div`
  min-width: 110px;
  font-size: 12px;
  color: ${({ theme }) => theme.black};
`;

//전체
const DivDayPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;
`;
export default DayPickerTwo;
