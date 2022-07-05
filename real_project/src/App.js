// 라이브러리 및 그 외
import "./App.css";
import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

//Pages 연결

import AddProfile from "./pages/AddProfile";
import Chat from "./pages/Chat";
import EmploymentProfile from "./pages/EmploymentProfile";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MainEmployment from "./pages/MainEmployment";
import MainRecruit from "./pages/MainRecruit";
import Recruit from "./pages/Recruit";
import RecruitWrite from "./pages/RecruitWrite";
import Main from "./pages/Main";
import Test from "./pages/Test";

//Components 연결
import Header from "./components/Header";
import Loading from "./pages/Loading";

function App() {
  return (
    <MainWrap>
      {/* <MainHeader> */}
      <Header />
      {/* </MainHeader> */}
      {/* <AddProfile/> */}
      {/* <Test/> */}
      {/* <Chat/> */}
      {/* <EmploymentProfile/> '완료' */}
      {/* <Join/> '완료' */}
      {/* <Login/> '완료' */}
      {/* <MainEmployment/>
      <MainRecruit/> */}
      {/* <Recruit/> */}
      {/* <RecruitWrite/> '완료' */}
      {/* <Loading/> '완료' */}

      {/* <CardRecruit/> '컴포넌트' */}
      {/* <SelectBox/> '컴포넌트' */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mainrecruit" element={<MainRecruit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/employmentprofile" element={<EmploymentProfile />} />
        <Route path="/addprofile" element={<AddProfile />} />
        <Route path="/mainemployment" element={<MainEmployment />}></Route>
        <Route path="/recruit" element={<Recruit />}></Route>
        <Route path="/recruitwrite" element={<RecruitWrite />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </MainWrap>
  );
}

const MainWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const MainHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export default App;
