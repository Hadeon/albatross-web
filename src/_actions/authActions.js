import Login from "../routes/Login"

export function logout() {
  return {
    type: 'LOGOUT',
    payload: false
  }
}

export function login() {
  return {
    type: 'LOGIN',
    payload: true
  }
}