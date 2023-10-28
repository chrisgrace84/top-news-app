import { countries } from "./data.js";

export const getQueryString = (params) => {
  return Object.keys(params).map(key => {
    return key + '=' + params[key];
  }).join('&');
}

export const getCountryByCode = (code) => countries.find((country) => country?.code === code);

export const stripHtml = (string) => string.replace(/(<([^>]+)>)/ig, "")