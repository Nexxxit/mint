import { useState, useEffect, useContext } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isVisiblePassword, setVisiblePassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleClickVisible = () => {
    setVisiblePassword(!isVisiblePassword);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user, data.token);
        navigate("/");
      } else {
        setError(data.message);
        setShowAlert(true);
      }
    } catch (error) {
      setError("Ошибка при входе. Попробуйте ещё раз.");
      setShowAlert(true);
    }
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

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
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <span>
            <Form.Label>Пароль</Form.Label>
            <Button variant="link" onClick={handleClickVisible}>
              {isVisiblePassword ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </Button>
          </span>
          <Form.Control
            type={isVisiblePassword ? "text" : "password"}
            placeholder="Введите пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rememberMe">
          <Form.Check type="checkbox" label="Запомнить меня" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
      {showAlert && (
        <>
          <Alert className="mt-4 mb-0" variant="danger">
            <p className="mb-0">{error}</p>
          </Alert>
        </>
      )}
    </>
  );
}
