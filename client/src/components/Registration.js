import { useState, useContext, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
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
        setShowAlert(true);
      }
    } catch (error) {
      setError("Ошибка при регистрации. Попробуйте ещё раз.");
      setShowAlert(true);
    }
  };

  const handleClickVisiblePassword = () => {
    setVisiblePassword(!isVisiblePassword);
  };

  const handleClickVisibleConfirmPassword = () => {
    setVisibleConfirmPassword(!isVisibleConfirmPassword);
  };

  const validatePassword = (password) =>{
    const isValidLength = password.length >= 6;
    const hasUpperCase = /[A-Z, А-Я]/.test(password);

    return isValidLength && hasUpperCase;
  }

  useEffect(()=> {
    setPasswordsMatch(password === passwordCurrent);
    setPasswordValid(validatePassword(password));
  }, [password, passwordCurrent])

  useEffect(() => {
    setDisabledBtn(!(passwordValid && passwordsMatch && email));
  }, [passwordValid, passwordsMatch, email]);

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
        controlId="registerForm"
        className="d-flex flex-column gap-3"
        onSubmit={handleRegisterSubmit}
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
          <Form.Text className="text-muted">
            Длина пароля должна быть не менее 6 символов и содержать заглавную
            букву
          </Form.Text>
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
            value={passwordCurrent}
            onChange={(e) => setPasswordCurrent(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={disabledBtn}>
          Зарегистрироваться
        </Button>
      </Form>
      {(!passwordsMatch && !passwordValid) && (
        <>
        <Alert className="mt-4 mb-0" variant="danger">
          <p className="mb-0">Пароль не соответствует требованиям и пароли не совпадают</p>
        </Alert>
      </>
      )}
      {(!passwordValid && passwordsMatch) && (
        <>
          <Alert className="mt-4 mb-0" variant="danger">
            <p className="mb-0">Пароль не соответствует требованиям</p>
          </Alert>
        </>
      )}
      {(!passwordsMatch && passwordValid) && (
        <>
          <Alert className="mt-4 mb-0" variant="danger">
            <p className="mb-0">Пароли не совпадают</p>
          </Alert>
        </>
      )}
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
