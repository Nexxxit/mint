const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post("/api/register", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const newUser = { email, password: hashedPassword };
    users.push(newUser);
  
    const token = jwt.sign({ email }, "your_jwt_secret");
    res.status(201).json({ user: newUser, token });
  });
  
  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);
  
    if (!user) {
      return res.status(401).json({ message: "Неверная почта или пароль" });
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Неверная почта или пароль" });
    }
  
    const token = jwt.sign({ email }, "your_jwt_secret");
    res.json({ user: { email }, token });
  });
  
  app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
  });