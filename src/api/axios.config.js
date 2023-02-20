import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (err.response.status === 404) {
      window.location.href = "/";
      //   navigate("/");
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
