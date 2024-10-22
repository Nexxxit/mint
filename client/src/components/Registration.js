import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isVisiblePassword, setVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/register", {
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
      }
    } catch (error) {
      setError("Ошибка при регистрации. Попробуйте ещё раз.");
    }
  };

  const handleClickVisiblePassword = () => {
    setVisiblePassword(!isVisiblePassword);
  };

  const handleClickVisibleConfirmPassword = () => {
    setVisibleConfirmPassword(!isVisibleConfirmPassword);
  };

  return (
    <>
      <Form controlId="registerForm" className="d-flex flex-column gap-3" onSubmit={handleRegisterSubmit}>
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
            <Button variant="link" onClick={handleClickVisiblePassword}>
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
        <Form.Group controlId="passwordConfirm">
          <span>
            <Form.Label>Подтвердите пароль</Form.Label>
            <Button variant="link" onClick={handleClickVisibleConfirmPassword}>
              {isVisibleConfirmPassword ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </Button>
          </span>
          <Form.Control
            type={isVisibleConfirmPassword ? "text" : "password"}
            placeholder="Повторите пароль"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
      {error && <p>{error}</p>}
    </>
  );
}
