export const TOKEN_KEY = "Bearer xxx";

export const isAuthenticated = () => localStorage.getItem('token_key') !== null;

export const getToken = () => localStorage.getItem('token_key');

export const login = () => {
  localStorage.setItem('token_key', TOKEN_KEY);
};

export const logout = () => {
  localStorage.removeItem('token_key');
};

export default {
  isAuthenticated,
  getToken,
  login,
  logout
}