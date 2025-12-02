import axios from "axios";
import supabase from "../supabaseClient";

export const api = axios.create({
  baseURL: "https://lxpjwcrfuqkthbnrljqy.supabase.co/functions/v1/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const token = session?.access_token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
