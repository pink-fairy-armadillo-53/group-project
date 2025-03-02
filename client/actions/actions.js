/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, FAVORITE_FILM, UNFAVORITE_FILM, ADD_REVIEW } from '../constants-action-types/actionTypes';

// export const registerUserActionCreator = (param) => ({
//   type: REGISTER_USER,
//   payload: param,
// });

export const loginUserActionCreator = (userinfo) => ({
  type: LOGIN_USER,
  payload: userinfo = {
    username: ,
    profile_img: 
  },
});

export const logoutUserActionCreator = (bool) => ({
    type: LOGOUT_USER,
    payload: bool,
  });

  export const favoriteFilmActionCreator = (param) => ({
    type: FAVORITE_FILM,
    payload: param,
  });

  export const unfavoriteFilmActionCreator = (param) => ({
    type: UNFAVORITE_FILM,
    payload: param,
  });

  export const addReviewActionCreator = (param) => ({
    type: ADD_REVIEW,
    payload: param,
  });

// add more action creators
