import React,{useState,useEffect, useRef} from "react"
import styled from "styled-components"

import MatchingBtn from "../components/Matching/MatchingBtn"
import { useSelector,useDispatch } from "react-redux";
import MiniResume from "../components/MiniProfile";
import { loadResumesAxios } from "../redux/modules/interview";
import { matchesProjectsAxios } from "../redux/modules/matches";
import CardRecruit from "../components/CardRecruit";


function MatchingResume() {
    const dispatch = useDispatch();

    const myResume = useSelector((state) => state.interview.resumes);
    const data = useSelector((state) => state.matches.projects)
  
    const [resumeId, setResumeId] = useState("");
    const [seeData, setSeeData] = useState(false)

  
  useEffect(() => {
      dispatch(loadResumesAxios());
    }, []);

  const matchOnclick = () => {
      dispatch(matchesProjectsAxios(resumeId));
      setSeeData(true);
  }



    return (
      <>
        <MatchingBtn />
        <MatchingCrewWrap>
          <MatchingTopWrap>
            <MatchingText>
              맞는 프로젝트를 찾고 싶은 이력서를 선택해주세요
            </MatchingText>
            <MatchingCardWrap>
              <MiniResume data={myResume} setResumeId={setResumeId} />
            </MatchingCardWrap>
          </MatchingTopWrap>
          <MatchingBotBtnWrap>
            <MatchingButton
              style={
                resumeId !== ""
                  ? { backgroundColor: "" }
                  : { backgroundColor: "#D9D9D9", pointerEvents: "none" }
              }
              onClick={matchOnclick}
            >
              매칭하기
            </MatchingButton>
          </MatchingBotBtnWrap>
          {seeData ? (
            <MatchingBotWrap>
              <MatchingContentWrap>
                <MatchingText>
                  맞는 상대를 찾고 싶은 프로젝트를 선택해주세요
                </MatchingText>
                <MatchingResumeWrap>
                  {data.map((list, idx) => {
                    return <CardRecruit key={idx} data={list} />;
                  })}
                </MatchingResumeWrap>
              </MatchingContentWrap>
            </MatchingBotWrap>
          ) : (
            ""
          )}
        </MatchingCrewWrap>
      </>
    );
}


const MatchingCrewWrap = styled.div`
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const MatchingTopWrap = styled.div`
    width: 100%;
    /* border: 1px solid black; */
    margin-top: 44.5px;
`

const MatchingText = styled.span`
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 24px;
`

const MatchingCardWrap = styled.div`
    height: 384px;
    width: 200%;
    border: 1px solid black;
    overflow-x: scroll;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`

const MatchingBotBtnWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

const MatchingButton = styled.button`
    padding: 7.5px 24px 7.5px 24px;
    font-size: 16px;
    font-weight: 700;
    background: #303032;
    border-radius: 4px;
    background-color: #303032;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
`

const MatchingBotWrap = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    margin-top: 36px;
    background: linear-gradient(115.2deg, rgba(174, 151, 227, 0.3) 0%, rgba(119, 195, 231, 0.3) 77.66%);
`

const MatchingResumeWrap = styled.div`
    border: 1px solid black;
    width: 100%;
    margin-top: 20px;
    height: 600px;
    overflow: scroll;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
`               
                        
const MatchingContentWrap = styled.div`
    margin-top: 40px;
`
 
export default MatchingResume