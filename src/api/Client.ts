import axios from "axios";

type apiType = {
  endPoint: string;
  option?: RequestInit;
};

const URL = import.meta.env.VITE_API_URL;

export async function apiCall({ endPoint, option }: apiType) {
  const response = await fetch(`${URL}${endPoint}`, option);

  if (!response) {
    throw new Error("Could not fetch any data.");
  }

  return response.json();
}

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
