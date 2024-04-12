import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";

//REGISTER END-POINT
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if name was entered
    if (!name) {
      return res.json({
        error: "name is required",
      });
    }

    // check if password is good
    if (!password || password < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }

    const hashedPassword = await hashPassword(password);

    //create a user in DB
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// LOGIN END-POINT

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    console.log("Provided password:", password);
    console.log("Stored hashed password:", user.password);
    //check is passwords match
    const match = await comparePassword(password, user.password);
    console.log("Password match:", match);
    if (match) {
      res.json("passwords match");
    }
    if (!match) {
      res.json("passwords do not match");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export { loginUser, registerUser };
