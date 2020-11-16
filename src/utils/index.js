const isLogin = (token) => {
  if (token) {
    return true;
  }
  return false;
};

const isAdmin = (user) => {
  if (user.token && user.admin) {
    return true;
  }
  return false;
};

export { isLogin, isAdmin };
