
import { getAllTags } from "./../../services/services";
import { getTweets } from "./../../services/services";

export const TAGS = "TAGS";
export const TWEETS = "TWEETS";

export function tagsList(tags) {
  return dispatch =>
  getAllTags(tags).then((response) => { 
      if (response) {
        return dispatch({
          type: TAGS,
          payload: response
        });
      }
    });
}

export function tweetList(tags) {
  return dispatch =>
  getTweets(tags).then((response) => { 
      if (response) {
        return dispatch({
          type: TWEETS,
          payload: response
        });
      }
    });
}