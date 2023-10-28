export const getQueryString = (params) => {
  return Object.keys(params).map(key => {
    return key + '=' + params[key];
  }).join('&');
}