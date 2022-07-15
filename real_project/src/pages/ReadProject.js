import styled from "styled-components"
import { useSelector,useDispatch } from "react-redux";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import React, { useEffect,useState } from "react";
import { LoadDetailAxios } from "../redux/modules/postRecruit"
import { checkUserValidation } from "../redux/modules/user";
import { loadApplyAxios } from "../redux/modules/postProfile";
import Cardempol from "../components/CardEmpol"

import TagCompoEmpPro from "../components/TagCompoRecPro";
import MiniResume from "../components/MiniResume";

import letter from "../image/letter.svg"
import astroman from "../image/astroman.svg"


function ReadProject() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {projectId} = useParams();

    const [modify, setModify] = useState(false);

    let start =""
    let end = ""
    let href = ""

    // 로그인 유저별 resume card 용
    const loginInfo = useSelector((state) => state.user.userInfo.is_login);
    const loginUser = useSelector((state) => state.user.userInfo);
    const loginInfoName = useSelector((state) => state.user.userInfo.userId);
    const nickname_Info = useSelector((state) => state.user.userInfo.nickname);

    console.log(loginUser) // 해당 로그인 유저 정보
    console.log(loginInfo) //로그인 true, false
    console.log(loginInfoName) // 로그인 유저 메일 주소


    const Value = useSelector((state) => state.postRecruit.project);


    useEffect(() => {
        if (loginInfo === false) {
          dispatch(checkUserValidation());
        }}, [loginInfo]);

    useEffect(() => {
        dispatch(LoadDetailAxios(projectId))
    }, [])

    useEffect(() => {
        if (!(nickname_Info === undefined || nickname_Info === null)) {
            dispatch(loadApplyAxios(nickname_Info));
      }
    }, [nickname_Info]);



    return(
        <>
        <AllWrap>
            <TopWrap>
                <TopTitle>
                {Value && Value[0]?.title}
                </TopTitle>
                <TopDateLimit>{Value && Value[0]?.start} 
                ~ {Value && Value[0]?.end}</TopDateLimit>
            </TopWrap>
                <DivideLine/>
            <MainTextWrap>
                <MainText>
                    <MainTextSpan>{Value && Value[0]?.details}</MainTextSpan>
                </MainText>
            </MainTextWrap>
            <FindRoleWrap>
                <div><RoleTitle>찾는 직군</RoleTitle></div>
                <div><span>{Value && Value[0]?.role}</span></div>
            </FindRoleWrap>
            <FindSkillWrap>
                <div><RoleTitle>필요한 스킬 및 스텍</RoleTitle></div>
                <div><span>
                    {Value && Value[0]?.skills.map((list, idx) => {
                         return <TagCompoEmpPro key={idx} skills={list} />})}</span></div>
            </FindSkillWrap>
                <DivideLine/>
            <DateWrap>
            <div>

            </div>
            </DateWrap>
                <DivideLine/>
            <ProfileWrap>
                <ProfileTitleWrap>
                    <RoleTitle>작성자 프로필</RoleTitle>
                </ProfileTitleWrap>
                <ProfileDetailWrap>   
                    <ProfilePhoto></ProfilePhoto>
                    <UserAllWrap>
                        <UserNameWrap>
                            <UserText>{Value && Value[0]?.nickname}</UserText>
                            <UserText>직군</UserText>
                        </UserNameWrap>
                        <UserMailWrap>
                            <LetterImg src = {letter}></LetterImg>
                            <UserMailAdress>{Value && Value[0]?.email}</UserMailAdress>
                        </UserMailWrap>
                    </UserAllWrap>
                </ProfileDetailWrap>
            </ProfileWrap>
            <DivideLine/>
            <MiniResumeWrap>
                <MiniResume /> 
            </MiniResumeWrap>
            <DivideLine/>
            <ButtonWrap>
                <SubmitButton>지원하기</SubmitButton>
                <SubmitButton onClick={() => {navigate("/findprojectstep2/" + `${Value[0].projectId}`);}}>수정하기</SubmitButton>
                <SubmitButton>삭제하기</SubmitButton>
            </ButtonWrap>
        </AllWrap>
        </>
    )
}


const AllWrap = styled.div`
    border: 1px solid black;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const TopWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 55px;
`

const MainTextWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const FindRoleWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 77px;
    gap: 12px;
`

const FindSkillWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 30px;
`

const DateWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 40px;
`

const ProfileWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 40px;
`

const ButtonWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 80px;
    gap: 20px;
`

const SubmitButton = styled.button`
    background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
    border-radius: 4px;
    color: white;
    padding: 10px 45px 10px 45px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
`

const DivideLine = styled.hr`
    width: 1200px;
`

const TopTitle = styled.span`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
`

const TopDateLimit = styled.span`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 24px;
`

const MainText = styled.div`
    width: 1200px;
    margin-top: 32px;
    /* border: 1px solid black; */
`
const MainTextSpan = styled.span`
    font-size: 16px;
    font-weight: 400;
`

const RoleTitle = styled.span`
    font-size: 16px;
    font-weight: 700;
`

const ProfileDetailWrap = styled.div`
    /* border: 1px solid black; */
    height: 100px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const ProfilePhoto = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${astroman});
    background-position: center;
    background-size: cover;
    /* border: 1px solid black; */
`

const UserNameWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
`

const UserMailWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const UserAllWrap = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20px;
`

const UserText = styled.span`
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 8px;
`
const UserMailAdress = styled.span`
    font-size: 15px;
    font-weight: 500;
`

const LetterImg = styled.img`
    width: 20px;
    margin-right: 10px;
`

const ProfileTitleWrap = styled.div`
    margin-bottom: 15px;
`

const MiniResumeWrap = styled.div`
    /* border: 1px solid black; */
    width: 1200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
    margin-bottom: 30px;
`



export default ReadProject
