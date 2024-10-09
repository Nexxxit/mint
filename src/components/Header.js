import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img 
            alt="" 
            src="" 
            width={30} 
            height={30} 
            className="d-inline-block align-top" 
            />{' '}
            Mint
          </Navbar.Brand>
          <Nav className="me-auto gap-2">
            <Nav.Link as={Link} to="/" active>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/transactions">Транзакции</Nav.Link>
            <Nav.Link as={Link} to="/budgeting">Бюджетирование</Nav.Link>
            <Nav.Link as={Link} to="/categories">Категории</Nav.Link>
          </Nav>
          <Nav className="gap-3">
            <Button variant="link" className="text-dark fs-5" title="Настройки"><i className="bi bi-gear"></i></Button>
            <Button variant="outline-secondary" className="fs-5" title="Выход"><i className="bi bi-door-closed text-dark"></i></Button>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
