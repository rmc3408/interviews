import { atom } from "recoil";

export const authState = atom({
  key: 'isAuthenticated',
  default: false,
});

export const userState = atom({
  key: 'loginCredential',
  default: { username: 'Sergey Golberg', email: '', password: ''},
});
