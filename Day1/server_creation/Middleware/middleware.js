exports.auth_token =(req, res, next)=> {
  let sts = true;
  if (sts) next();
  else {
    res.status(401).send("<h1>Oops! You are not authorized</h1>");
    return;
  }
};

