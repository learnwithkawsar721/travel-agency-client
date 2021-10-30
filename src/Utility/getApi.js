const getApi = (url) => {
  return `https://trabel-agencey-server.herokuapp.com/${url}`;
  // return `http://localhost:5000/${url}`;
};
export default getApi;
