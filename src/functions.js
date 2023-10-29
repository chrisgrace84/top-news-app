import { countries } from "./data.js";

export const getQueryString = (params) => {
  return Object.keys(params).map(key => {
    return key + '=' + params[key];
  }).join('&');
}

export const getCountryByCode = (code) => countries.find((country) => country?.code === code);

export const stripHtml = (string) => string.replace(/(<([^>]+)>)/ig, "")

export const getFormattedDate = (data) => {
  const date = new Date(data)
  const day = `${date.getDate()}`.padStart(2, '0');
  const month = `${date.getMonth()}`.padStart(2, '0');
  return `${day}/${month}/${date.getFullYear()}`
}