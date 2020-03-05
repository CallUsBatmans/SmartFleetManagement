let keys = {
  user: 'user'
};

const addItem = (key, value) => localStorage.setItem(key, value);
const getItem = (key) => localStorage.getItem(key);
const getAuthenticatedUser = () => localStorage.getItem(keys.user);
const addAuthenticatedUser = data => localStorage.setItem(keys.user, data);

export const storageService = {
  addItem,
  getItem,
  getAuthenticatedUser,
  addAuthenticatedUser
};
