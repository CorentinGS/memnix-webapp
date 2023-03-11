// Create a login request to the server
//
// @param {string} email
// @param {string} password
// @returns {Promise<{token: string}>}
import { get, getWithToken, post } from "./utils";
import { ENDPOINTS } from "./endpoints";

export async function login(email: string, password: string) {
  const res = await post(ENDPOINTS.Security.login, { email, password });
  if (res.ok) {
    return res.json();
  }
  throw new Error(await res.text());
}

export async function isConnected(token: string) {
  const res = await getWithToken(ENDPOINTS.Users.me, token);
  console.log(res);
  return res.ok;
}

export async function getMeilisearchToken() {
  const res = await get(ENDPOINTS.Security.meilisearchToken);
  if (res.ok) {
    return res.json();
  }
  throw new Error(await res.text());
}
