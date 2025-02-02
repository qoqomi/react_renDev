import { apis } from "../../shared/api";

//코코미 리덕스

const LOAD = "employ/LOAD";
const CREATE = "employ/CREATE";
const MODIFY = "employ/MODIFY";
const DELETE = "employ/DELETE";

//게시글 상세조회
const LOAD_SINGLE = "employ/LOAD_SINGLE";

const initialState = {
  returnResumes: [],
  resumes: []
};

export function loadEmploy(payload) {
  return { type: LOAD, payload };
}
export function createEmploy(payload) {
  return { type: CREATE, payload };
}
export function modifyEmploy(payload) {
  return { type: MODIFY, payload };
}
export function deleteEmploy(payload) {
  return { type: DELETE, payload };
}
export function loadSingleEmploy(payload) {
  return { type: LOAD_SINGLE , payload};
}

//팀원 찾기 전체 조회
export const loadEmployAxios = () => {
  return async function (dispatch) {
    await apis
      .resumesLoad()
      .then((response) => {
        let list= []
        let resumes = response.data.returnResumes.reverse();
        list = [...resumes];
       
        dispatch(loadEmploy(list));

      })
      .catch((err) => {
      });
  };
};

export const projectsPhotosAxios = (frm) => {
  return async function (dispatch) {
    let success = null;
    await apis
      .projectsPhotos(frm)
      .then((response) => {
        const img = response.data.resumeImage;
        success = img;
      }).catch((err) => {
        success = null;
      })
    return success; 
  }
}
//팀원 찾기 등록
export const resumesCreateAxios = (
  content, 
  start, 
  end, 
  role, 
  skills, 
  content2, 
  content3,
   _resumeId,
   _nickname
) => {
  return async function (dispatch) {
    await apis
      .resumesCreate(
        content,
        start,
        end,
        role,
        skills,
        content2,
        content3
      )
      .then((response) => {
        dispatch(
          createEmploy({
            content: content,
            start: start,
            end: end,
            role: role,
            skill: skills,
            content2: content2,
            content3: content3,
            resumeId: _resumeId,
            nickname: _nickname
          })
        );
      }).catch((err) => {
      })
  };
};
//팀원찾기 상세조회
export const loadSingleEmployAxios = (resumeId) => {
  return async function (dispatch,useState) {
    await apis
      .resumesLoadDetail(resumeId)
      .then((response) => {
        dispatch(loadSingleEmploy(response.data.resumes));
      })
      .catch((err) => {

      });
  };
};
//팀원 찾기 수정
export const modifyEmployAxios = (
  resumeId,
  content,
  start,
  end,
  role,
  skills,
  content2,
  content3
) => {
  return async function (dispatch) {
    await apis
      .resumesModify(
        resumeId,
        content,
        start,
        end,
        role,
        skills,
        content2,
        content3
      )
      .then((response) => {
        dispatch(
          modifyEmploy({
            resumeId: resumeId,
            content: content,
            start: start,
            end: end,
            role: role,
            skills: skills,
            content2: content2,
            content3: content3,
          })
        );
      });
  };
};
//팀원 찾기 삭제
export const deleteEmployAxios = (resumeId) => {
  return async function (dispatch) {
    await apis
      .resumesDelete(resumeId)
      .then((response) => {
        
        dispatch(deleteEmploy());
      }).catch((err) => {

      })
  };
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "employ/LOAD": {
      return { returnResumes: action.payload, resumes: state.resumes };
    }

    case "employ/CREATE": {
      const newResumes = [action.payload, ...state.returnResumes];

      return {
        returnResumes: newResumes,
        resumes: state.resumes,
      };
    }

    case "employ/MODIFY": {
   
      return {
        returnResumes: state.returnResumes,
        resumes: action.payload,
      };
    }

    case "employ/LOAD_SINGLE": {
      const newResumes = [action.payload];
      return { returnResumes: action.state, resumes: newResumes };
    }
      //delete가 있으면 작동하지않음 
    // case "employ/DELETE": {
    //   return { returnResumes: action.state, resumes: action.payload };
    // }

    default:
      return state;
  }
}