import { apis } from "../../shared/api";

const LOADAPPLY = "userpage/LOADAPPLY";
const LOADPROJECT = "userpage/LOADPROJECT"

const initialState = {
  Applications: [],
  Myprojects: []
};

export function loadApply(payload) {
  return { type: LOADAPPLY, payload };
}

export function loadproject(loadpay) {
  return { type: LOADPROJECT, loadpay };
}

//middleware

//내 지원정보 조회
export const loadApplyAxios = (nickname) => {
  return async function (dispatch) {
    await apis
      .userApply(nickname)
      .then((response) => {
        console.log('여기도 받아용')
      dispatch(loadApply(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//내 프로젝트 조회
export const loadProjectAxios = (nickname) => {
  return async function (dispatch) {
    await apis
      .userRecruit(nickname)
      .then((response) => {
        console.log('받았습니당')
      dispatch(loadproject(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


//프로필 업로드
// export const applyPhotosAxios = (frm) => {
//   return async function (dispatch) {
//     let success = null;
//     await apis
//       .userPhotos(frm)
//       .then((response) => {
//         const img = response;
//         success = img;
//       })
//       .catch((err) => {
//         success = null;
//       });
//     return success;
//   };
// };

//Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "userpage/LOADAPPLY": {
      return { Applications: action.payload };
    }

    case "userpage/LOADPROJECT": {
      return { Myprojects: action.loadpay };
    }

    default:
      return state;
  }
}
