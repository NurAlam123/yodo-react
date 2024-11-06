import axios, { AxiosRequestConfig } from "axios";

const axiosFetch = async (url: string, options: AxiosRequestConfig) => {
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.withCredentials = true;
  return await axios({
    url,
    ...options,
  });
};

export default axiosFetch;
