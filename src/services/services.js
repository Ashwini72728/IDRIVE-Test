import { API_URL } from "./../config.js";
import axios from "axios";

export const getAllTags = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: API_URL + '/tag'
    })
      .then(response => { 
        if (response) {
          resolve(response);
        }
      })
      .catch(error => {
        return error;
      });
  });
};


export const getTweets = (data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: API_URL + '/search/quote?tag='+ data
    })
      .then(response => { 
        if (response) {
          resolve(response);
        }
      })
      .catch(error => {
        return error;
      });
  });
};