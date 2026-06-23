import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All fields required" });
      return;
    }

    const existingUSer = await User.findOne({ email });
    if (existingUSer) {
      res.status(409).json({ message: "Email already registered" });
      return;
    }

    //Create New User and Complete registration => tomorrow
  } catch (errror) {}
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login Successful from Controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logged Out Successfully from Controller" });
};
