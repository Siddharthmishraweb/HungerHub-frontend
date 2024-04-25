// import { api } from '../../../config/api';
import { api } from '../../config/api';
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_FAILURE, CREATE_INGREDIENT_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from './ActionType';



export const getIngredientsOfRestaurant = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`api/admin/ingredients/restaurant/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("get all ingredients: ", response.data);
            dispatch({ type: GET_INGREDIENTS, payload: response.data });
        } catch (error) {
            console.log("error in getting ingredients: ", error);
            //dispatch({ type:  });
        }
    }
}

export const createIngredient = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`api/admin/ingredients`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("createIngredient: ", response.data);
            dispatch({ type: CREATE_INGREDIENT_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("error in getting ingredients: ", error);
            //dispatch({ type:  CREATE_INGREDIENT_FAILURE, payload: error });
        }
    }
}

export const createIngredientCategory = ({ data, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`api/admin/ingredients/category`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("createIngredientCategory: ", response.data);
            dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("error in getting ingredients: ", error);
            //dispatch({ type:  CREATE_INGREDIENT_FAILURE, payload: error });
        }
    }
}

export const getIngredientCategory = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`api/admin/ingredients/restaurant/${id}/category`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("getIngredientCategory: ", response.data);
            dispatch({ type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
        } catch (error) {
            console.log("error in getting ingredients: ", error);
            //dispatch({ type:  CREATE_INGREDIENT_FAILURE, payload: error });
        }
    }
}


export const updateStockOfIngredient = ({ id, jwt }) => {
    return async (dispatch) => {
        try {
            const { data } = await api.get(`api/admin/ingredients/${id}/stock`, {},{
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("UPDATE_STOCK stock: ", data);
            dispatch({ type: UPDATE_STOCK, payload: data });
        } catch (error) {
            console.log("error in getting ingredients: ", error);
            //dispatch({ type:  CREATE_INGREDIENT_FAILURE, payload: error });
        }
    }
}