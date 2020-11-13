const isAdmin = (user) => {
  if (user.token && user.admin) {
    return true;
  }
  return false;
};

export default isAdmin;
