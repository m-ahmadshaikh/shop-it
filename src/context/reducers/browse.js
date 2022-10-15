import { GETTING_CATEGORIES, SET_CATEGORIES } from '../actionTypes';

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
