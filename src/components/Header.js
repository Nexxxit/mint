import { Container, Navbar, Nav, Button, Modal } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from '../logo.svg';

export default function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const location = useLocation();

  const handleClickTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Logo"
              src={logo}
              width={30}
              height={30}
              className="d-inline-block align-top"
            />{" "}
            Mint
          </Navbar.Brand>
          <Nav className="me-auto gap-2">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/transactions" active={location.pathname === '/transactions'}>
              Транзакции
            </Nav.Link>
            <Nav.Link as={Link} to="/budgeting" active={location.pathname === '/budgeting'}>
              Бюджетирование
            </Nav.Link>
            <Nav.Link as={Link} to="/categories" active={location.pathname === '/categories'}>
              Категории
            </Nav.Link>
          </Nav>
          <Nav className="gap-3">
            <Button variant="light" className="fs-5" onClick={handleClickTheme}>
              {isDarkTheme ? (
                <i className="bi bi-brightness-high"></i>
              ) : (
                <i className="bi bi-moon"></i>
              )}
            </Button>
            <Button
              variant="light"
              className="text-dark fs-5"
              title="Настройки"
            >
              <i className="bi bi-gear"></i>
            </Button>
            <Button
              variant="outline-secondary"
              className="fs-5"
              title="Выход"
              onClick={() => setModalShow(true)}
            >
              <i className="bi bi-door-closed text-dark"></i>
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <LeaveModal show={modalShow} onHide={() => setModalShow(false)} />
    </header>
  );
}

function LeaveModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="d-flex justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          Выход из аккаунта
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="secondary" onClick={props.onHide}>
          Отмена
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Выйти
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
