

export default (state = true, action) => {
  switch(action.type) {
    case 'LOGOUT':
      return state = action.payload;
    case 'LOGIN':
      return state = action.payload;
    default:
      return state;
  }
}