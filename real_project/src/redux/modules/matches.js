
import { apis } from "../../shared/api";


const MATCHRESUMES = "matches/MATCHRESUMES";
const MATCHPROJECT = "matches/MATCHPROJECT";





const initialState = {
  resumes: [],
  projects: [],
};


export function matchesResumes(payload) {
  return { type: MATCHRESUMES, payload };
}

export function matchesProjects(payload) {
  return { type: MATCHPROJECT, payload };
}





//프로젝트에 맞는 이력서 조회
export const matchesResumesAxios = (projectId) => {
  return async function (dispatch) {
    await apis
      .matchResumes(projectId)
        .then((res) => {
        dispatch(matchesResumes(res.data));
      })
      .catch((err) => {
      });
  };
};

//이력서에 맞는 프로젝트 조회
export const matchesProjectsAxios = (resumeId) => {
  return async function (dispatch) {
    await apis
      .matchProjects(resumeId)
      .then((res) => {
        dispatch(matchesProjects(res.data));
      })
      .catch((err) => {
      });
  };
};





export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case "matches/MATCHRESUMES": {
      return {
        resumes: action.payload,
        projects: state.projects,
      };
    }
    case "matches/MATCHPROJECT": {
      return {
        resumes: state.resumes,
        projects: action.payload,
      };
    }

    default:
      return state;
  }
}
