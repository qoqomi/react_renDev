
import { apis } from "../../shared/api";

const LOAD = 'recruit/LOAD';
const CREATE = 'recruit/CREATE';
const EDIT = 'recruit/EDIT';
const DETAIL = 'recruit/DETAIL';
const DELETE = 'recruit/DELETE';
// const APPOINT = 'recruit/APPOINT';

const initialState = {
  receiveRecruit: [],
  project: []
};

export function loadRecruit(payload) {
  return { type: LOAD, payload };
}

export function createRecruit(payload) {
  return { type: CREATE, payload };
}

export function editRecruit(payload) {
  return { type: EDIT, payload };
}

export function detailRecruit(payload) {
  return { type: DETAIL, payload };
}

export function deleteRecruit(payload) { 
  return { type: DELETE, payload};
}



//프로젝트 조회
export const loadRecruitAxios = () => {
  return async function (dispatch) {
    await apis
      .projectsLoad()
      .then((res) => {
        let list = [];
        let project = res.data.projects.reverse()
        list = [...project]
        dispatch(loadRecruit(list));
      })
      .catch((err) => {
      });
    } 
  };

//사진
export const projectsPhotosAxios = (frm) => {

  return async function (dispatch) {
    let success = null;
    await apis
      .projectsPhotos(frm)
      .then((res) => {
        const img = res.data.photos;
        success = img;
      }).catch((err) => {
        success = null;
      })
    return success; 
  }
}

//프로젝트 등록
export const createRecruitAxios = (
  title, 
  details, 
  subscript, 
  role, 
  start, 
  end, 
  skills,
  schedule
) => {
  return async function (dispatch) {
    await apis
      .projectsCreate(
        title,
        details,
        subscript,
        role,
        start,
        end,
        skills,
        schedule
      )
      .then((res) => {
        dispatch(
          createRecruit({
            title: title,
            details: details,
            subscript: subscript,
            role: role,
            start: start,
            end: end,
            skills: skills,
            schedule: schedule,
          })
        );
      })
      .catch((err) => {
      });
  };
};
//프로젝트 상세조회
export const LoadDetailAxios = (projectId) => {
  return async function(dispatch, useState) {
    await apis
    .projectsLoadDetail(projectId)
    .then((res) => {
      dispatch(detailRecruit(res.data.project))
    })
    .catch((err) => {
    })
  }
}
//프로젝트 수정
export const editRecruitAxios = (
  projectId,
  title,
  details,
  subscript,
  role,
  start,
  end,
  skills,
  photos,
  schedule
) => {
  return async function (dispatch) {
     let res = null;
    await apis
      .projectsModify(
      projectId,
      title,
      details,
      subscript,
      role,
      start,
      end,
      skills,
      [],
      schedule
    ).then(() => {
      res = true;
      dispatch(
        editRecruit({
          projectId:projectId,
          title: title,
          details: details,
          subscript: subscript,
          role: role,
          start: start,
          end: end,
          skills: skills,
          photos: [],
          schedule: schedule,
        })
      );
    }).catch((err) => {
      res = false;
    })
    return res;
  };
};

//프로젝트 삭제
export const deleteRecruitAxios = (projectId) => {
  let res = null;
  return async function (dispatch) {
    await apis
      .projectsDelete(projectId)
      .then((response) => {
        res = true;
        dispatch(deleteRecruit())
      })
      .catch((err) => {
        res = false;
      });
    return res;
  };
};


 
//리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "recruit/LOAD": {
      return {
        receiveRecruit: action.payload,
        project: state.recruit,
      };
    }
    case "recruit/CREATE": {
      const writeProject = [action.payload, ...state.receiveRecruit];
      return {
        reciveRecruit: writeProject,
        project: state.recruit,
      };
    }
    case "recruit/DETAIL": {
     
      const projects = [action.payload];
      return {
        receiveRecruit: action.state,
        project: projects,
      };
    }
    case "recruit/EDIT": {
      return {
        reciveRecruit: state.receiveRecruit,
        project: [action.payload],
      };
    }

    default:
      return state;
  }
}
