import {
  GETTING_CATEGORIES,
  GETTING_CATEGORY_ITEMS,
  SET_CATEGORIES,
  SET_CATEGORY_ITEMS,
} from '../actionTypes';

const browseInitialState = {
  loading: false,
  categories: null,
  categoryItems: null,
};

const browseReducer = (state, { type, payload }) => {
  switch (type) {
    case GETTING_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case SET_CATEGORIES:
      return { ...state, loading: false, categories: payload.categories };

    default:
      return state;
  }
};

export { browseInitialState, browseReducer };
