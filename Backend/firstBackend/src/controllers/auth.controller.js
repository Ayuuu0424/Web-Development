export const LoginUser = (req, res) => {
  res.json({ message: "Login Successful from Controller" });
};

export const RegisterUser = (req, res) => {
  res.json({ message: "Registration Successful from Controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logged Out Successfully from Controller" });
};
