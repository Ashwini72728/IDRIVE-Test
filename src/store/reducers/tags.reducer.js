import { TAGS , TWEETS} from "../actions/tags.action";

const initialState = {
  tagsList: "",
  tweets: ""
};

const login = function(state = initialState, action) {
  switch (action.type) {
    case TAGS: { 
      return {
        ...state,
        tagsList: action.payload
      };
    }
    case TWEETS: { 
      return {
        ...state,
        tweets: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default login;