const test = (req, res) => {
  res.json("hello testing");
};

const registerUser = (req, res) => {
  const { name, email, passowrd } = req.body;
};

export { test, registerUser };
