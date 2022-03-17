import axios from "axios";
import { appConfig } from "../config";
import {store} from '../store';
const { mainDomain } = appConfig;

function userToken (){

 let user = JSON.parse(localStorage.getItem("persist:persist-root"))
  return "bearer " +user.user.loginToken
}
const APICaller = (endpoint, method, body,token, contentType) =>
  axios({
    url: `${mainDomain}/${endpoint}`,
    method: method || "GET",
    data: body,
    headers: {
      Authorization: "bearer " + token,
      Accept: "application/json",
      "Content-Type": contentType || "application/json",
    },
    responseType: "json",
  })
    .then((response) => {
      console.log(`response from ${mainDomain}/${endpoint} >> ${response}`);
      return response;
    })
    .catch((error) => {
      console.log(`Error from ${mainDomain}/${endpoint}>> ${error}`);

      throw error.response;
    });

export default APICaller;
