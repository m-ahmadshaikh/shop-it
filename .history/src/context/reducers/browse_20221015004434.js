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
      break;
    case SET_CATEGORIES:
      break;

    case GETTING_CATEGORY_ITEMS:
      break;
    case SET_CATEGORY_ITEMS:
      break;

    default:
      return state;
  }
};
