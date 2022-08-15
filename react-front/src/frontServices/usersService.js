import httpService from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

export const TOKEN_KEY = "token";

httpService.setDefaultCommonHeader(
  "x-auth-token",
  localStorage.getItem(TOKEN_KEY)
);

export function createUser(user) {
  return httpService.post(`${config.apiUrl}/users`, user);
}

export async function login(email, password) {
  const { data } = await httpService.post(`${config.apiUrl}/auth`, {
    email,
    password,
  });

  localStorage.setItem(TOKEN_KEY, data.token);
}



export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJwt();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

const service = {
  createUser,
  login,
  logout,
  getJwt,
  getUser
};

export default service;
