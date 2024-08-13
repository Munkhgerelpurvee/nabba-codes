const { readJson } = require("../utils");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const login = async (req, res) => {
  const { email, password } = req.body;
  const users = readJson("users.json");

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
const createUser = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "users.json");
    const rawData = fs.readFileSync(filePath);
    const users = JSON.parse(rawData);

    const { name, email, password } = req.body;

    const newUser = {
      id: uuidv4(),
      name,
      email,
      password,
    };
    // const newUser = { ...req.body, id: uuidv4() };
    users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { login, createUser };
