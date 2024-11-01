import { Button, Form } from "react-bootstrap";

export default function TransactionsListItem({
  onClickShow,
  edit,
}) {
  const getDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}:${month}:${year}`;
  };

  return (
    <>
      <div className="p-3 border border-secondary-subtle rounded-4 shadow-sm d-flex justify-content-between align-items-center gap-4">
        <Form.Group className="col">
          <Form.Label>Сумма</Form.Label>
          <Form.Control placeholder="Сумма транзакции" required></Form.Control>
        </Form.Group>
        <Form.Group className="col">
          <Form.Label>Категория</Form.Label>
          <Form.Select required>
            <option>-</option>
            <option value={1}>Транспорт</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="col-2">
          <Form.Label>Описание</Form.Label>
          <Form.Control placeholder="Описание транзакции"></Form.Control>
        </Form.Group>
        <Form.Group className="col">
          <Form.Label>Тип транзакции</Form.Label>
          <Form.Select required>
            <option>-</option>
            <option value="profit">Доход</option>
            <option value="expense">Расход</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="col">
          <Form.Label>Дата</Form.Label>
          <Form.Control value={getDate()} disabled></Form.Control>
        </Form.Group>
        <div className={`col justify-content-between ${edit ? "d-flex" : "d-none"}`}>
          <Button
            variant="outline-danger"
            className="mx-auto"
            onClick={onClickShow}
          >
            <i className="bi bi-trash fs-5"></i>
          </Button>
          <Button variant="outline-success">
            <i className="bi bi-check fs-5"></i>
          </Button>
        </div>
      </div>
    </>
  );
}
