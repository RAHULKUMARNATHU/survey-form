import axios from "axios";

const HEADERS = {
  "Content-Type": "application/json",
};

export const getCustomHttpClient = (headers = {}, axiosParams = {}) => {
  const client = axios.create({
    baseURL: `https://survey-form-s485.onrender.com`,
    headers: {
      ...headers,
    },
    ...axiosParams,
  });

  return client;
};

export const HttpClient = getCustomHttpClient(HEADERS);
