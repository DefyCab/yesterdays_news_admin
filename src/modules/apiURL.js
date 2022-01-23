let apiURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiURL = "http://localhost:3000/api";
} else {
  apiURL = "https://yesterdays-news-api.herokuapp.com/api";
}

export default apiURL;
