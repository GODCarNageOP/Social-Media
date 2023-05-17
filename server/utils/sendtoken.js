const sendToken = (user, statusCode, res) => {
console.log("1", process.env.COOKIE_EXPIRE);

  const token = user.getJWTToken();

  // cookies here

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),

    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

export default sendToken
