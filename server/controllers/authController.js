import User from "../models/user.js";

// const test = (req, res) => {
//   res.json("hello testing");
// };

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
    //create a user in DB
    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export { registerUser };
