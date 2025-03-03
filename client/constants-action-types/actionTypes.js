/**
 * ************************************
 *
 * @module  actionTypes.js
 * @author
 * @date
 * @description Action Type Constants
 *
 * ************************************
 */


// add action type constants i.e.:
// export const ACTION_DESCRIPTION = "ACTION_DESCRIPTION";

export const REGISTER_USER = 'REGISTER_USER'; // collecting new user and adding to db
export const LOGIN_USER = 'LOGIN_USER'; // switch user from logged out to logged in
export const LOGOUT_USER = 'LOGOUT_USER'; // switch user from logged in to logged out
export const FAVORITE_FILM = 'FAVORITE_FILM'; // save a favorite film to user's favorite films
export const UNFAVORITE_FILM = 'UNFAVORITE_FILM'; // remove a favorite film from user's favorite films
export const ADD_REVIEW = 'ADD_REVIEW'; // capture user review and add to their reviews list
export const EDIT_REVIEW = 'EDIT_REVIEW'; // edit user review
export const DELETE_REVIEW = 'DELETE_REVIEW'; // delete user review
export const GET_MOVIES = 'GET_MOVIES'; // populate films in component
// filter films action by genre etc.

