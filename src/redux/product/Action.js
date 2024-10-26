import { api } from "../../config/ApiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
    dispatch({
        type:FIND_PRODUCTS_REQUEST
    });
  const {
    category,
    colors,
    sizes,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const {data} = await api.get(`api/products?colors=${colors}&sizes=${sizes}&category=${category}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    console.log("Product Data : ",data);
    dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message});
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
    dispatch({
        type:FIND_PRODUCT_BY_ID_REQUEST
    });
  const {productId} = reqData;
  try {
    const {data} = api.get(`api/products/id/${productId}`);
    dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data});
  } catch (error) {
    dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message});
  }
};


