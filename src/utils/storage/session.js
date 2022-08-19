// import { decrypto, encrypto } from '../crypto';

export function setSession(key, value) {
  // const json = encrypto(value);
  sessionStorage.setItem(key, value);
}

export function getSession(key) {
  const json = sessionStorage.getItem(key);
  // let data = null;
  // if (json) {
  //   try {
  //     data = decrypto(json);
  //   } catch {
  //     // 防止解析失败
  //   }
  // }
  return json;
}

export function removeSession(key) {
  window.sessionStorage.removeItem(key);
}

export function clearSession() {
  window.sessionStorage.clear();
}
