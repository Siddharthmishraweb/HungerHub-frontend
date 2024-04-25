import axios from "axios";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { API_URL, api } from "../../config/api";
import { type } from "@testing-library/user-event/dist/type";

export const registerUser = (reqData) => async(dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try{
        const { data } = await axios.post(`${API_URL}/auth/signup`, reqData.userData);
        if(data.jwt) localStorage.setItem("jwt", data.jwt);
        if(data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant");
        }
        else{
            reqData.navigate("/");
        }
        dispatch({type: REGISTER_SUCCESS, payload: data.jwt });
    }catch(e){
       dispatch({type: REGISTER_FAILURE, payload: e});
       console.log("register error", e)
    }
}

export const loginUser = (reqData) => async(dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try{
        const { data } = await axios.post(`${API_URL}/auth/signin`, reqData.userData);
        if(data.jwt) localStorage.setItem("jwt", data.jwt);
        if(data.role === "ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant");
        }
        else{
            reqData.navigate("/");
        }
        dispatch({type: LOGIN_SUCCESS, payload: data.jwt });
    }catch(e){
       dispatch({type: LOGIN_FAILURE, payload: e});
       console.log("login error", e);
    }
}

export const getUser = (jwt) => async(dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try{
        const { data } = await api.get('/api/users/profile', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: GET_USER_SUCCESS, payload: data });
        console.log(data);
    }catch(e){
        dispatch({type: GET_USER_FAILURE, payload: e});
       console.log("get user error", e);
    }
}

export const addToFavorite = ({ jwt, restaurantId }) => async(dispatch) => {
    dispatch({ type: ADD_TO_FAVORITE_REQUEST });
    try{
        const { data } = await api.put(`api/restaurants/${restaurantId}/add-favorites`, {}, {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
    }catch(e){
        dispatch({type: ADD_TO_FAVORITE_FAILURE, payload: e});
       console.log("get user error", e);
    }
}

export const logout = () => async(dispatch) => {
    dispatch({ type: LOGOUT });
    try{
        localStorage.clear();
        dispatch({ type: LOGOUT });
        console.log("log out success");
    }catch(e){
       console.log("get user error", e);
    }
}