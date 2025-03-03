/**
 * ************************************
 *
 * @module  userReducer
 * @author
 * @date
 * @description reducer for user data
 *
 * ************************************
 */

import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FAVORITE_FILM,
  UNFAVORITE_FILM,
  ADD_REVIEW,
} from '../constants-action-types/actionTypes.js';



const initialUserState = {
  user_id: '',
  username: '',
  profile_img: '',
  favorites: [],
  reviews: [],
  logged_in_status: false
};

const userReducer = (state = initialUserState, action) => {
//   let marketList; 

  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
      };
    }
    //case SET_NEW_LOCATION:

    case LOGIN_USER: {
      
      return {
        ...state,
      };
    }

    case LOGOUT_USER: {

      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
