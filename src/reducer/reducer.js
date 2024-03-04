// reducer.js

import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_STORE_FAILURE,
  FETCH_STORE_REQUEST,
  FETCH_STORE_SUCCESS,
  CREATE_STORE_FAILURE,
  CREATE_STORE_REQUEST,
  CREATE_STORE_SUCCESS,
  LOGIN_STORE_REQUEST,
  LOGIN_STORE_SUCCESS,
  LOGIN_STORE_FAILURE,
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  PRODUCT_IB_BY_REQUEST,
  PRODUCT_IB_BY_SUCCESS,
  PRODUCT_IB_BY_FAILURE,
  ADDCARD_IB_BY_REQUEST,
  ADDCARD_IB_BY_SUCCESS,
  ADDCARD_IB_BY_FAILURE,
  GET_ADDCARD_IB_BY_REQUEST,
  GET_ADDCARD_IB_BY_SUCCESS,
  GET_ADDCARD_IB_BY_FAILURE,
  DELETE_ADDCARD_IB_BY_REQUEST,
  DELETE_ADDCARD_IB_BY_SUCCESS,
  DELETE_ADDCARD_IB_BY_FAILURE,
  USER_RESPONCE_REQUEST,
  USER_RESPONCE_SUCCESS,
  USER_RESPONCE_FAILURE,
  BRAND_IB_BY_FAILURE,
  REGISITION_STORE_REQUEST,
  REGISITION_STORE_SUCCESS,
  REGISITION_STORE_FAILURE,
  ADMIN_LIST_RESPONCE_REQUEST,
  ADMIN_LIST_RESPONCE_SUCCESS,
  ADMIN_LIST_RESPONCE_FAILURE,
  EDIT_PRODUCT_ID_REQUEST,
  EDIT_PRODUCT_ID_SUCCESS,
  EDIT_PRODUCT_ID_FAILURE,
  DELETE_PRODUCT_ID_REQUEST,
  DELETE_PRODUCT_ID_SUCCESS,
  DELETE_PRODUCT_ID_FAILURE,
  GET_STAFF_LIST_REQUEST,
  GET_STAFF_LIST_SUCCESS,
  GET_STAFF_LIST_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  GET_PROFILE_LIST_REQUEST,
  GET_PROFILE_LIST_SUCCESS,
  GET_PROFILE_LIST_FAILURE,
  BANNER_STORE_REQUEST,
  BANNER_STORE_SUCCESS,
  BANNER_STORE_FAILURE,
  FAQ_STORE_REQUEST,
  FAQ_STORE_SUCCESS,
  FAQ_STORE_FAILURE,
  BRAND_IB_BY_REQUEST,
  BRAND_IB_BY_SUCCESS,
  ORDER_LIST_STATUS_REQUEST,
  ORDER_LIST_STATUS_SUCCESS,
  ORDER_LIST_STATUS_FAILURE,
  ORDER_LIST_REQUEST_REFRESH,
} from "./actions";

const initialState = {
  data: null,
  productlist: null,
  storelist: null,
  loading: false,
  error: null,
  loginerror: null,
  createData: null,
  createerror: null,
  Editcategory: null, // This will store the response data
  loginData: null,
  getprofile: null,
  profileerror: null,
  Ordererror: null,
  getOrder: null,
  ProductIderror: null,
  GetProductId: null,
  ProductIdloading: null,
  addcardIdloading: null,
  GetAddcardRes: null,
  addloading: null,
  GetAddcardUserRes: null,
  Deleteloading: null,
  DeleteAddcardUserRes: null,
  GetBrandId: null,
  GetStorelist: null,
  EditproductbyId: null,
  GetStaffList: null,
  GetProfileList: null,
  addStaffList: null,
  GetBannerList: null,
  GetFaqList: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        productlist: action.payload,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        storelist: action.payload,
      };
    case FETCH_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        Editcategory: null,
      };
    case CREATE_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        Editcategory: action.payload, // Update userData with the response data
      };
    case CREATE_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Update error with the error message
        userData: null,
      };
    case LOGIN_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        loginerror: null,
        loginData: null,
      };
    case LOGIN_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        loginerror: null,
        loginData: action.payload, // Update userData with the response data
      };
    case LOGIN_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        loginerror: action.payload, // Update error with the error message
        loginData: null,
      };
    case REGISITION_STORE_REQUEST:
      return {
        ...state,
        loading: true,
        createerror: null,
        createData: null,
      };
    case REGISITION_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        createerror: null,
        createData: action.payload, // Update userData with the response data
      };
    case REGISITION_STORE_FAILURE:
      return {
        ...state,
        loading: false,
        createData: action.payload, // Update userData with the response data
      };
      case ORDER_LIST_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        createerror: null,
        UpdateOrderres: null,
      };
    case ORDER_LIST_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        UpdateOrderres: action.payload, // Update userData with the response data
      };
    case ORDER_LIST_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        UpdateOrderres: action.payload, // Update userData with the response data
      };
    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        profileerror: null,
        getproductlist: null,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        profileerror: null,
        getproductlist: action.payload, // Update userData with the response data
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        profileerror: action.payload, // Update error with the error message
        getprofile: null,
      };

    case USER_RESPONCE_REQUEST:
      return {
        ...state,
        loading: true,
        profileerror: null,
        getUserDatalist: null,
      };
    case USER_RESPONCE_SUCCESS:
      return {
        ...state,
        loading: false,
        profileerror: null,
        getUserDatalist: action.payload, // Update userData with the response data
      };
    case USER_RESPONCE_FAILURE:
      return {
        ...state,
        loading: false,
        getUserDatalist: action.payload, // Update error with the error message
        getprofile: null,
      };
    case ADMIN_LIST_RESPONCE_REQUEST:
      return {
        ...state,
        loading: true,
        GetStorelist: null,
      };
    case ADMIN_LIST_RESPONCE_SUCCESS:
      return {
        ...state,
        loading: false,
        GetStorelist: action.payload, // Update userData with the response data
      };
    case ADMIN_LIST_RESPONCE_FAILURE:
      return {
        ...state,
        loading: false,
        GetStorelist: action.payload, // Update error with the error message
      };

    case ORDER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        Ordererror: null,
      };
  
    case ORDER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        Ordererror: null,
        getOrder: action.payload, // Update userData with the response data
      };
    case ORDER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        Ordererror: action.payload, // Update error with the error message
        getOrder: null,
      };
      case ORDER_LIST_REQUEST_REFRESH:
        console.log(action.payload);
        return {
          ...state,
          loading: true,
          Orderlength: action.payload, // Update error with the error message
        };
    case PRODUCT_IB_BY_REQUEST:
      return {
        ...state,
        ProductIdloading: true,
        ProductIderror: null,
        GetProductId: null,
      };
    case PRODUCT_IB_BY_SUCCESS:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: null,
        GetProductId: action.payload, // Update userData with the response data
      };
    case PRODUCT_IB_BY_FAILURE:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        GetProductId: null,
      };
    case EDIT_PRODUCT_ID_REQUEST:
      return {
        ...state,
        ProductIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        GetProductId: null,
      };
    case EDIT_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        BrandIdloading: true,
        EditproductbyId: null,
      };
    case EDIT_PRODUCT_ID_FAILURE:
      return {
        ...state,
        BrandIdloading: false,
        EditproductbyId: action.payload, // Update userData with the response data
      };
    case DELETE_PRODUCT_ID_REQUEST:
      return {
        ...state,
        DeleteIdloading: false,
        ProductIderror: action.payload, // Update error with the error message
        DeleteProductId: null,
      };
    case DELETE_PRODUCT_ID_SUCCESS:
      return {
        ...state,
        DeleteIdloading: true,
        DeleteProductId: null,
      };
    case DELETE_PRODUCT_ID_FAILURE:
      return {
        ...state,
        DeleteIdloading: false,
        DeleteProductId: action.payload, // Update userData with the response data
      };
    case BRAND_IB_BY_FAILURE:
      return {
        ...state,
        BrandIdloading: false,
        EditproductbyId: null,
      };
    case ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        addcardIdloading: true,
        GetAddcardRes: null,
      };
    case ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        addcardIdloading: false,
        GetAddcardRes: action.payload, // Update userData with the response data
      };
    case ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        addcardIdloading: false,
        GetAddcardRes: action.payload,
      };
    case GET_ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        addloading: true,
        GetAddcardUserRes: null,
      };
    case GET_ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetAddcardUserRes: action.payload, // Update userData with the response data
      };
    case GET_ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        addloading: false,
        GetAddcardUserRes: action.payload,
      };
    case DELETE_ADDCARD_IB_BY_REQUEST:
      return {
        ...state,
        Deleteloading: true,
        DeleteAddcardUserRes: null,
      };
    case DELETE_ADDCARD_IB_BY_SUCCESS:
      return {
        ...state,
        Deleteloading: false,
        DeleteAddcardUserRes: action.payload, // Update userData with the response data
      };
    case DELETE_ADDCARD_IB_BY_FAILURE:
      return {
        ...state,
        Deleteloading: false,
        DeleteAddcardUserRes: action.payload,
      };

    case GET_STAFF_LIST_REQUEST:
      return {
        ...state,
        addloading: true,
        GetStaffList: null,
      };
    case GET_STAFF_LIST_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetStaffList: action.payload, // Update userData with the response data
      };
    case GET_STAFF_LIST_FAILURE:
      return {
        ...state,
        addloading: false,
        GetStaffList: action.payload,
      };

    case ADD_EMPLOYEE_REQUEST:
      return {
        ...state,
        addloading: true,
        addStaffList: null,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        addloading: false,
        addStaffList: action.payload, // Update userData with the response data
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        addloading: false,
        addStaffList: action.payload,
      };

      case GET_PROFILE_LIST_REQUEST:
      return {
        ...state,
        addloading: true,
        GetProfileList: null,
      };
    case GET_PROFILE_LIST_SUCCESS:
      return {
        ...state,
        addloading: false,
        GetProfileList: action.payload, // Update userData with the response data
      };
    case GET_PROFILE_LIST_FAILURE:
      return {
        ...state,
        addloading: false,
        GetProfileList: action.payload,
      };
      case BANNER_STORE_REQUEST:
        return {
          ...state,
          addloading: true,
          GetBannerList: null,
        };
      case BANNER_STORE_SUCCESS:
        return {
          ...state,
          addloading: false,
          GetBannerList: action.payload, // Update userData with the response data
        };
      case BANNER_STORE_FAILURE:
        return {
          ...state,
          addloading: false,
          GetBannerList: action.payload,
        };
      case BRAND_IB_BY_REQUEST:
        return {
          ...state,
          addloading: true,
          GetBrandId: null,
        };
      case BRAND_IB_BY_SUCCESS:
        return {
          ...state,
          addloading: false,
          GetBrandId: action.payload, // Update userData with the response data
        };
      case BRAND_IB_BY_FAILURE:
        return {
          ...state,
          addloading: false,
          GetBrandId: action.payload,
        };
      case FAQ_STORE_REQUEST:
        return {
          ...state,
          GetFaqList: null,
        };
      case FAQ_STORE_SUCCESS:
        return {
          ...state,
          GetFaqList: action.payload, // Update userData with the response data
        };
      case FAQ_STORE_FAILURE:
        return {
          ...state,
          GetFaqList: action.payload,
        };

    default:
      return state;
  }
};

export default dataReducer;
