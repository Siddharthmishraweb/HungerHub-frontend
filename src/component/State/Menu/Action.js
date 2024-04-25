import { api } from "../../config/api";
import { GET_ALL_EVENTS_REQUEST } from "../Restaurant/ActionTypes";
import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_ALL_FOOD_FAILURE, GET_ALL_FOOD_REQUEST, GET_ALL_FOOD_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST, UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS } from "./ActionType";

export const createMenuItem = ({ menu, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.post("api/admin/food", menu,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("created menu: ", data);
            dispatch({ type: CREATE_MENU_ITEM_SUCCESS, data: data });
        } catch (error) {
            console.log("error in created menu: ", error);
            dispatch({ type: CREATE_MENU_ITEM_FAILURE, data: error });
        }
    }
}

export const getMenuItemsByRestaurantId = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
        try {
            const { data } = await api.get(`api/food/restaurant/${reqData.restaurantId}?isVegetarian=${reqData.isVegeterian}&isSeasonal=${reqData.isSeasonal}&isNonVeg=${reqData.isNonVeg}&food_category=${reqData.foodCategory}`,
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: error });
        }
    }
}

export const getAllFood = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_FOOD_REQUEST });
        try {
            const  {data} = await api.get(`api/food?isAll=${reqData.isAll}&isVegetarian=${reqData.isVegeterian}&isSeasonal=${reqData.isSeasonal}&isNonVeg=${reqData.isNonVeg}`,
            {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            });
            dispatch({ type: GET_ALL_FOOD_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: GET_ALL_FOOD_FAILURE, payload: error });
        }
    }
}

export const searchMenuItem = ({ keyword, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.get(`api/food/search?name=${keyword}`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
        }
    }
}

// export const getAllIngredientsOfMenuItem = ({ reqData }) => {
//     return async (dispatch) => {
//         dispatch({ type: GET_ALL_ });
//         try {
//             const { data } = await api.get(`api/food/search?name=${keyword}`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`
//                 }
//             });
//             dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: data });
//         } catch (error) {
//             dispatch({ type: SEARCH_MENU_ITEM_FAILURE, payload: error });
//         }
//     }
// }

export const updateMenuItemsAvailability = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST });
        try {
            const { data } = await api.put(`api/admin/food/${foodId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: error });
        }
    }
}

export const deleteFoodAction = ({ foodId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_MENU_ITEM_REQUEST });
        try {
            const { data } = await api.delete(`api/admin/food/${foodId}`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("data is:: ", data)
            dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: foodId });
        } catch (error) {
            dispatch({ type: DELETE_MENU_ITEM_FAILURE, payload: error });
        }
    }
}