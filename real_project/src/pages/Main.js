import styled from "styled-components";

function Main() {
  return (
    <>
      <MainAllWrap className="MainBack">
        <MaininTitleTopWrap>
          <div>
            <TitleMain>
              renDev를 설명하는 메인글입니다. 캐치프라이즈를 작성해주십셔
            </TitleMain>
          </div>
          <SubWrap>
            <SubMain>
              여기에는 renDev를 설명하는 핵심 캐치프라이즈 문구가 들어갑니다. 약
              세줄 정도가 들어갈 것 같은데 세줄이라고 말하니 좀 많다고
              느껴지면서 적다고도 느껴지는 지금 이 상황은 뭔가 ㅈ
            </SubMain>
          </SubWrap>
          <MainButtonWrap>
            <PageButton>프로젝트 페이지로 가기</PageButton>
            <PageButton2>팀원 페이지로 가기</PageButton2>
          </MainButtonWrap>
        </MaininTitleTopWrap>
      </MainAllWrap>
    </>
  );
}

const MainAllWrap = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 60vh;
  padding: 20px;
  background-color: #9595d2;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

const MaininTitleTopWrap = styled.div`
  /* border: 1px solid black; */
  width: 400px;
  height: 350px;
  margin-left: 100px;
  margin-bottom: 70px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const TitleMain = styled.span`
  font-size: 35px;
  font-weight: bolder;
  color: white;
`;

const SubWrap = styled.div`
  margin-top: 20px;
`;

const SubMain = styled.span`
  font-size: 15px;
  color: white;
`;

const PageButton = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 12px;
  background-color: #2e008b;
  color: white;
  cursor: pointer;
`;

const PageButton2 = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 12px;
  background-color: #b884cb;
  color: white;
  cursor: pointer;
`;

const MainButtonWrap = styled.div`
  /* border: 1px solid black; */
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export default Main;
