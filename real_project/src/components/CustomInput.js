import React, { forwardRef } from "react";
import styled from "styled-components";

const CustomInput = forwardRef(({ value, onClick, inputType }, ref) => {
  return (
    <PannelButton onClick={onClick} ref={ref}>
      <ButtonName>{inputType === "end" ? "끝" : "프로젝트 시작"}</ButtonName>
      <SelectedDate>{value}</SelectedDate>
    </PannelButton>
  );
});

const PannelButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 30px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 20px;
  border-color: transparent;
  background-color: white;
  transition: 0.4s ease;
  border: 1px solid #685bc7;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 3px 0 ${({ theme }) => theme.middleGray};
  }
`;

const ButtonName = styled.p`
  margin: 0 0 4px 2px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.black};
`;

const SelectedDate = styled.div`
  min-width: 110px;
  font-size: 12px;
  color: ${({ theme }) => theme.black};
`;

export default CustomInput;
