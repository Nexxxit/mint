import { Form, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import logo from "../logo.svg";

export default function Auth() {
  return (
    <>
      <div className="d-flex mt-5">
        <div className="col-6 p-3 pt-0">
          <ToggleButtonGroup
            className="d-flex"
            type="radio"
            name="auth"
            defaultValue={1}
          >
            <ToggleButton
              className="col-6 rounded-start-4"
              id="loginRadio"
              type="radio"
              variant="primary"
              name="radioLog"
              value={1}
            >
              Вход
            </ToggleButton>
            <ToggleButton
              className="col-6 rounded-end-4"
              id="registerRadio"
              type="radio"
              variant="primary"
              name="radioReg"
              value={2}
            >
              Регистрация
            </ToggleButton>
          </ToggleButtonGroup>
          <div className="p-3">
            <div className="d-flex justify-content-center align-items-center">
              <p className="fs-1 position-relative">
                Mint
                <img
                  alt="Logo"
                  src={logo}
                  width={30}
                  height={30}
                  className="position-absolute top-0 end-1 translate-middle-x"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 p-3 border border-black rounded-4">
          <Form className="d-flex flex-column gap-3">
            <Form.Group controlId="email">
              <Form.Label>Почта</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите электронную почту"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <span>
                <Form.Label>Пароль</Form.Label>
                <Button variant="link">
                  <i className="bi bi-eye"></i>
                </Button>
              </span>
              <Form.Control type="password" placeholder="Введите пароль" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="rememberMe">
              <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Войти
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
