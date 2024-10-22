import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isVisiblePassword, setVisiblePassword] = useState(false);

  const handleClickVisible = () => {
    setVisiblePassword(!isVisiblePassword);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      console.log("Login succesful!");
    } else {
      setError(data.message);
    }
  };

  return (
    <>
      <Form
        controlId="loginForm"
        className="d-flex flex-column gap-3"
        onSubmit={handleLoginSubmit}
      >
        <Form.Group controlId="email">
          <Form.Label>Почта</Form.Label>
          <Form.Control
            type="email"
            placeholder="Введите электронную почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <span>
            <Form.Label>Пароль</Form.Label>
            <Button variant="link" onClick={handleClickVisible}>
              {isVisiblePassword ? (<i className="bi bi-eye-slash"></i>) : (<i className="bi bi-eye"></i>)}
            </Button>
          </span>
          <Form.Control
            type={isVisiblePassword ? "text" : "password"}
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rememberMe">
          <Form.Check type="checkbox" label="Запомнить меня" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
      {error && <p>{error}</p>}
    </>
  );
}
